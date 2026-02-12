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

export default class DatadogMetricsApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  async submit(metrics: Array<MetricSubmission>): Promise<string> {
    const json = await this.#api.fetchJson({
      path: `/api/v1/series`,
      method: 'POST',
      body: {
        series: metrics.map(x => ({
          metric: x.metric_name,
          type: x.metric_type,
          interval: x.interval,
          points: x.points.map(y => ([
            y.timestamp?.constructor === Date
              ? Math.floor(y.timestamp.valueOf() / 1000)
              : typeof y.timestamp === 'number'
              ? y.timestamp
              : Math.floor(Date.now() / 1000),
            y.value,
          ])),
          host: x.host_name,
          tags: x.tags ?? [],
        })),
      },
    });
    return (json as {status: string}).status;
  }
}

// typescript 4.1.0:
// type SearchKey = `metrics:${string}`;

export interface MetricSubmission {
  metric_name: string;
  metric_type?: 'gauge' | 'rate' | 'count';
  /** If the type of the metric is rate or count, define the corresponding interval. */
  interval?: number;
  /** The name of the host that produced the metric. */
  host_name?: string;
  /** Points relating to a metric. You'll likely only provide one at a time. */
  points: [{
    /**
     * Timestamps cannot be more than ten minutes in the future
     * or more than one hour in the past.
     */
    timestamp?: Date | number;
    value: number;
  }];
  tags?: Array<string>;
}
