import { DatadogError, recognizeError } from "./errors.ts";

// some datadog apis have big IDs, let's stringify them before we lose precision
function fixupDatadogJson(json: string): string {
  return json.replace(/"(id|[^":]+_id)": *\d+/g, (field) => {
    const [k, v] = field.split(/: */);
    return `${k}:"${v}"`;
  });
}

export type ApiConfig = {
  apiKey: string;
  appKey?: string;
  apiBase?: string;
};

/** Subset of Deno.env, used when configuring the client based on the process environment. */
export interface EnvGetter {
  get(key: string): string | undefined;
};

export function detectFromEnvironment(env: EnvGetter): ApiConfig {
  const apiKey = env.get("DATADOG_API_KEY") || env.get("DD_API_KEY");
  const appKey = env.get("DATADOG_APP_KEY") || env.get("DD_APP_KEY");
  if (!apiKey) throw new Error(
    `Export DATADOG_API_KEY (and probably DATADOG_APP_KEY) to use Datadog`,
  );

  return {
    apiKey, appKey,
    apiBase: env.get("DATADOG_HOST"),
  };
}

export default class DatadogApiClient {
  headers: Headers;
  apiBase: string;

  /**
   * Configures an API client based on environment variables.
   * @example DatadogApi.fromEnvironment(Deno.env)
   */
  static fromEnvironment(env: EnvGetter): DatadogApiClient {
    return new DatadogApiClient(detectFromEnvironment(env));
  }

  constructor(opts: ApiConfig) {
    if (!opts.apiKey) throw new Error(
      `apiKey is required to communicate with Datadog`,
    );

    this.headers = new Headers({
      "content-type": "application/json",
      "accept": "application/json",
      "dd-api-key": opts.apiKey,
    });
    if (opts.appKey) {
      this.headers.set("dd-application-key", opts.appKey);
    }

    this.apiBase = opts.apiBase || "https://api.datadoghq.com";
    if (!this.apiBase.includes("://")) throw new Error(
      `If you pass apiBase, it must be an absolute URL`,
    );
  }

  /**
   * Check if the API key (not the APP key) is valid.
   * If invalid, an error is thrown.
   */
  validateAccess(): Promise<{valid: true}> {
    return this.fetchJson({
      path: `/api/v1/validate`,
    }) as Promise<{valid: true}>;
  }

  async fetchJson(opts: {
    method?: 'GET' | 'POST' | 'DELETE';
    path: string;
    query?: URLSearchParams;
    body?: unknown;
  }): Promise<unknown> {
    let url = this.apiBase + opts.path;
    if (opts.query) {
      url += url.includes('?') ? '&' : '?';
      url += opts.query.toString();
    }

    const resp = await fetch(url, {
      headers: this.headers,
      method: opts.method ?? 'GET',
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });

    const respBody = await resp.text();
    if (resp.status >= 200 && resp.status < 300) {
      return JSON.parse(fixupDatadogJson(respBody));
    }

    // Be friendly if the user is likely misconfigured
    if (resp.status === 403 && respBody === '{"errors": ["Forbidden"]}') {
      if (!('dd-application-key' in this.headers)) {
        throw new DatadogError({
          _type: "simple", errors: [
            "Forbidden. Did you forget to set DATADOG_APP_KEY?"
          ]});
      }
    }

    if (respBody.startsWith("{")) {
      const errorJson = JSON.parse(respBody);
      const parsedError = recognizeError(errorJson);
      if (parsedError) {
        throw new DatadogError(parsedError);
      }
      console.log("Datadog error response body:", respBody);
    }
    throw new Error(`Datadog returned HTTP status ${resp.status}`);
  }
}
