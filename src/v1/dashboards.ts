import type {
  Dashboard,
  DashboardSummary,
  DashboardSummaryDefinition,
} from './models/dashboards.ts';

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    path: string,
    query?: URLSearchParams,
  }): Promise<unknown>;
}

/**
 * Interact with your dashboard lists through the API to make it easier
 * to organize, find, and share all of your dashboards with your team and organization.
 *
 * Official API docs: https://docs.datadoghq.com/api/latest/dashboards/
 */
export default class DatadogDashboardsApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  /**
   * Get all dashboards.
   * Note: This query will only return custom created or cloned dashboards.
   * This query will not return preset dashboards.
   */
  async listAll(opts: {
    filter?: {
      shared?: boolean;
    };
  } = {}): Promise<Array<DashboardSummaryDefinition>> {
    const qs = new URLSearchParams();
    if (opts.filter?.shared != null) qs.set("filter[shared]", `${opts.filter?.shared}`);
    const json = await this.#api.fetchJson({
      path: `/api/v1/dashboard`,
      query: qs,
    }) as DashboardSummary;
    return json.dashboards ?? [];
  }

  /**
   * Get a dashboard using the specified ID.
   * Note: The typings
   */
  async getOne(id: string): Promise<Dashboard> {
    const json = await this.#api.fetchJson({
      path: `/api/v1/dashboard/${encodeURIComponent(id)}`,
    });
    return json as Dashboard;
  }
}
