type TODO = unknown;

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    path: string,
    query?: URLSearchParams,
  }): Promise<unknown>;
}

export default class DatadogUsageMeteringApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  /** Get billable usage across your multi-org account. */
  async getBillableSummary(month: string): Promise<UsageList<BillableSummary>> {
    const qs = new URLSearchParams([["month", month]]);

    const json = await this.#api.fetchJson({
      path: `/api/v1/usage/billable-summary`,
      query: qs,
    });
    return json as UsageList<BillableSummary>;
  }

  /** Get top 500 custom metrics by hourly average. */
  async getTopCustomMetrics(month: string, opts: {
    metricNames?: string[],
  }={}): Promise<UsageList<CustomMetric>> {
    const qs = new URLSearchParams([["month", month]]);
    if (opts.metricNames) {
      qs.set("names", opts.metricNames.join(','));
    }

    const json = await this.#api.fetchJson({
      path: `/api/v1/usage/top_avg_metrics`,
      query: qs,
    });
    return json as UsageList<CustomMetric>;
  }
}

export type UsageList<T> = {
  usage: T[];
};


export interface BillableSummary {
  org_name: string;
  num_orgs: number;
  public_id: string;
  billing_plan: "Free" | "Pro" | "Enterprise"; // actually though?
  /** 1 = 100% */
  ratio_in_month: number;
  /** YYYY-MM-DD */
  start_date: string;
  /** YYYY-MM-DD */
  end_date: string;
  /** YYYY-MM-DD */
  calc_date: string;
  usage: Record<BillableSummaryCategories, BillableSummaryUsage | undefined>;
}

export interface BillableSummaryUsage {
  usage_unit: UsageUnit;
  /** The number of units used within the billable timeframe. */
  org_billable_usage: number;
  /** The total account usage. */
  account_billable_usage: number;
  /** Elapsed usage hours for some billable product. */
  elapsed_usage_hours: number;
  /** The percentage of account usage the org represents. 100 = 100% */
  percentage_in_account: number;
  /** YYYY-MM-DDTHH */
  first_billable_usage_hour: string;
  /** YYYY-MM-DDTHH */
  last_billable_usage_hour: string;
}

export type BillableSummaryCategories =
  | "infra_host_top99p"
  | "lambda_function_average"
  | "timeseries_average"
  | "logs_ingested_sum"
  | "apm_trace_search_sum"
  | "infra_container_sum"
  | "apm_host_top99p"
  | "logs_indexed_sum"
  | "siem_sum"
;

export type UsageUnit =
  | "gib"
  | "hosts"
  | "functions"
  | "timeseries"
  | "traces"
  | "container_hours"
  | "logs"
;


export interface CustomMetric {
  metric_category: "standard" | "custom";
  metric_name: string;
  /** Average number of timeseries per hour in which the metric occurs. */
  avg_metric_hour: number;
  /** Maximum number of timeseries per hour in which the metric occurs. */
  max_metric_hour: number;
};
