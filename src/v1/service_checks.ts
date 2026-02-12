type TODO = unknown;

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    method: 'GET' | 'POST';
    path: string;
    query?: URLSearchParams;
    body?: unknown;
  }): Promise<unknown>;
}

export default class DatadogServiceChecksApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  async submit(data: CheckRun): Promise<string> {
    const json = await this.#api.fetchJson({
      path: `/api/v1/check_run`,
      method: 'POST',
      body: {
        check: data.check_name,
        host_name: data.host_name,
        message: data.message,
        status: data.status.valueOf(),
        tags: data.tags ?? [],
        timestamp: data.timestamp
          ? Math.floor(data.timestamp.valueOf() / 1000)
          : undefined,
      },
    });
    return (json as {status: string}).status;
  }
}

export interface CheckRun {
  check_name: string;
  host_name: string;
  message?: string;
  status: CheckStatus;
  tags?: Array<string>;
  timestamp?: Date;
}

export enum CheckStatus {
  Ok = 0,
  Warning = 1,
  Critical = 2,
  Unknown = 3,
}
