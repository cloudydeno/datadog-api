type TODO = unknown;

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    path: string,
    query?: URLSearchParams,
  }): Promise<unknown>;
}

/**
 * APM Service Map API. For more information, visit the services map documentation:
 * https://docs.datadoghq.com/tracing/visualization/services_map/
 *
 * Note: This API is in public beta.
 * If you have any feedback, contact Datadog support.
 *
 * Official API docs: https://docs.datadoghq.com/api/latest/service-dependencies/
 */
export default class DatadogServiceDependenciesApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  /**
   * Get a list of services from APM and their dependencies.
   * The services retrieved are filtered by environment and a primary tag, if one is defined.
   * @returns An object containing a list of APM services and their dependencies.
   */
  async getAllServices(opts: ServiceDependenciesOptions): Promise<Record<string, {
    "calls": Array<string>;
  }>> {
    return await this.#api.fetchJson({
      path: `/api/v1/service_dependencies`,
      query: encodeOptions(opts),
    }) as Record<string, {
      "calls": Array<string>;
    }>;
  }

  /**
   * Variant of getAllServices() which converts the response object into an Array.
   */
  async getAllServicesAsArray(opts: ServiceDependenciesOptions): Promise<Array<{
    calls: Array<string>;
    name: string;
  }>> {
    return Object
      .entries(await this.getAllServices(opts))
      .map(([name, data]) => ({name, ...data}));
  }

  /**
   * Get a specific service’s immediate upstream and downstream services.
   * The services retrieved are filtered by environment and a primary tag, if one is defined.
   * @param service The name of the service go get dependencies for.
   * @returns An object with information on APM services that call, and are called by a given service.
   */
  async getSingleService(service: string, opts: ServiceDependenciesOptions): Promise<SingleServiceDependencies> {
    return await this.#api.fetchJson({
      path: `/api/v1/service_dependencies/${encodeURIComponent(service)}`,
      query: encodeOptions(opts),
    }) as SingleServiceDependencies;
  }
}

export interface ServiceDependenciesOptions {
  /** Specify what APM environment to query service dependencies by. */
  "env": string;
  /** Specify what primary tag to query service dependencies by. */
  "primaryTag"?: string;
  /** Specify the start of the timeframe to query for. (defaults to 1 hour before end parameter) */
  "start"?: Date;
  /** Specify the end of the timeframe to query for. (defaults to current time) */
  "end"?: Date;
}

function encodeOptions(opts: ServiceDependenciesOptions) {
  if (typeof opts.env != 'string') throw new Error(
    `'env' is required for all DatadogServiceDependencies APIs`);

  const params = new URLSearchParams();
  params.append('env', opts.env);

  if (opts.primaryTag) {
    params.append('primary_tag', opts.primaryTag);
  }
  if (opts.start) {
    params.append('start', (opts.start.valueOf() / 1000).toFixed(0));
  }
  if (opts.end) {
    params.append('end', (opts.end.valueOf() / 1000).toFixed(0));
  }

  return params;
}


export type SingleServiceDependencies = {
  /** Name of the APM service being searched for. */
  "name": string;
  /** List of service names that call the given service. */
  "called_by": Array<string>;
  /** List of service names called by the given service. */
  "calls": Array<string>;
}
