type TODO = unknown;

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    method: "GET" | "POST";
    path: string;
    query?: URLSearchParams;
    body?: unknown;
  }): Promise<unknown>;
}

export default class DatadogEventsApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  async submit(data: Event): Promise<string> {
    const json = await this.#api.fetchJson({
      path: `/api/v1/events`,
      method: "POST",
      body: {
        text: data.text,
        title: data.title,
        aggregation_key: data.aggregation_key,
        alert_type: data.alert_type,
        date_happened: data.date_happened
          ? Math.floor(data.date_happened.valueOf() / 1000)
          : undefined,
        device_name: data.device_name,
        host: data.host,
        priority: data.priority,
        related_event_id: data.related_event_id,
        source_type_name: data.source_type_name,
        tags: data.tags ?? [],
      },
    });
    return (json as { status: string }).status;
  }
}

export interface Event {
  /** max length: 4000 **/
  text: string;
  /** max length: 100 **/
  title: string;
  aggregation_key?: string;
  alert_type?: AlertType;
  date_happened?: Date;
  device_name?: string;
  host?: string;
  priority?: "normal" | "low";
  related_event_id?: number;
  source_type_name?: string;
  tags?: Array<string>;
}

export type AlertType =
  | "error"
  | "warning"
  | "info"
  | "success"
  | "user_update"
  | "recommendation"
  | "snapshot";
