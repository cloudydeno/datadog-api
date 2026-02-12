
/**
 * NOTE: This file is generated using other generated files as an input.
 * If something in this file needs to changed, try changing the generator instead.
 *
 * This file includes structures from https://github.com/DataDog/datadog-api-client-typescript
 *
 * Unless explicitly stated otherwise all files in that repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export interface Dashboard {
  /**
   * Identifier of the dashboard author.
   */
  "author_handle"?: string;
  /**
   * Creation date of the dashboard.
   */
  "created_at"?: Date;
  /**
   * Description of the dashboard.
   */
  "description"?: string;
  /**
   * ID of the dashboard.
   */
  "id"?: string;
  /**
   * Whether this dashboard is read-only. If True, only the author and admins can make changes to it. Prefer using `restricted_roles` to manage write authorization.
   */
  "is_read_only"?: boolean;
  "layout_type": DashboardLayoutType;
  /**
   * Modification date of the dashboard.
   */
  "modified_at"?: Date;
  /**
   * List of handles of users to notify when changes are made to this dashboard.
   */
  "notify_list"?: Array<string>;
  "reflow_type"?: DashboardReflowType;
  /**
   * A list of role identifiers. Only the author and users associated with at least one of these roles can edit this dashboard.
   */
  "restricted_roles"?: Array<string>;
  /**
   * Array of template variables saved views.
   */
  "template_variable_presets"?: Array<DashboardTemplateVariablePreset>;
  /**
   * List of template variables for this dashboard.
   */
  "template_variables"?: Array<DashboardTemplateVariable>;
  /**
   * Title of the dashboard.
   */
  "title": string;
  /**
   * The URL of the dashboard.
   */
  "url"?: string;
  /**
   * List of widgets to display on the dashboard.
   */
  "widgets": Array<Widget>;
}

export interface DashboardSummary {
  /**
   * List of dashboard definitions.
   */
  "dashboards"?: Array<DashboardSummaryDefinition>;
}

export type DashboardLayoutType =
| "ordered"
| "free"
;

export type DashboardReflowType =
| "auto"
| "fixed"
;

export interface DashboardTemplateVariable {
  /**
   * The list of values that the template variable drop-down is limited to.
   */
  "available_values"?: Array<string>;
  /**
   * The default value for the template variable on dashboard load.
   */
  "_default"?: string;
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The tag prefix associated with the variable. Only tags with this prefix appear in the variable drop-down.
   */
  "prefix"?: string;
}

export interface DashboardTemplateVariablePreset {
  /**
   * The name of the variable.
   */
  "name"?: string;
  /**
   * List of variables.
   */
  "template_variables"?: Array<DashboardTemplateVariablePresetValue>;
}

export interface Widget {
  "definition": WidgetDefinition;
  /**
   * ID of the widget.
   */
  "id"?: number;
  "layout"?: WidgetLayout;
}

export interface DashboardSummaryDefinition {
  /**
   * Identifier of the dashboard author.
   */
  "author_handle"?: string;
  /**
   * Creation date of the dashboard.
   */
  "created_at"?: Date;
  /**
   * Description of the dashboard.
   */
  "description"?: string;
  /**
   * Dashboard identifier.
   */
  "id"?: string;
  /**
   * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
   */
  "is_read_only"?: boolean;
  "layout_type"?: DashboardLayoutType;
  /**
   * Modification date of the dashboard.
   */
  "modified_at"?: Date;
  /**
   * Title of the dashboard.
   */
  "title"?: string;
  /**
   * URL of the dashboard.
   */
  "url"?: string;
}

export interface DashboardTemplateVariablePresetValue {
  /**
   * The name of the variable.
   */
  "name"?: string;
  /**
   * The value of the template variable within the saved view.
   */
  "value"?: string;
}

export type WidgetDefinition =
  | AlertGraphWidgetDefinition
  | AlertValueWidgetDefinition
  | ChangeWidgetDefinition
  | CheckStatusWidgetDefinition
  | DistributionWidgetDefinition
  | EventStreamWidgetDefinition
  | EventTimelineWidgetDefinition
  | FreeTextWidgetDefinition
  | FunnelWidgetDefinition
  | GeomapWidgetDefinition
  | GroupWidgetDefinition
  | HeatMapWidgetDefinition
  | HostMapWidgetDefinition
  | IFrameWidgetDefinition
  | ImageWidgetDefinition
  | ListStreamWidgetDefinition
  | LogStreamWidgetDefinition
  | MonitorSummaryWidgetDefinition
  | NoteWidgetDefinition
  | QueryValueWidgetDefinition
  | SLOWidgetDefinition
  | ScatterPlotWidgetDefinition
  | ServiceMapWidgetDefinition
  | ServiceSummaryWidgetDefinition
  | TableWidgetDefinition
  | TimeseriesWidgetDefinition
  | ToplistWidgetDefinition
  | TreeMapWidgetDefinition
;

export interface WidgetLayout {
  /**
   * The height of the widget. Should be a non-negative integer.
   */
  "height": number;
  /**
   * Whether the widget should be the first one on the second column in high density or not. **Note**: Only for the **new dashboard layout** and only one widget in the dashboard should have this property set to `true`.
   */
  "is_column_break"?: boolean;
  /**
   * The width of the widget. Should be a non-negative integer.
   */
  "width": number;
  /**
   * The position of the widget on the x (horizontal) axis. Should be a non-negative integer.
   */
  "x": number;
  /**
   * The position of the widget on the y (vertical) axis. Should be a non-negative integer.
   */
  "y": number;
}

export interface AlertGraphWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
   */
  "alert_id": string;
  "time"?: WidgetTime;
  /**
   * The title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": AlertGraphWidgetDefinitionType;
  "viz_type": WidgetVizType;
}

export interface AlertValueWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
   */
  "alert_id": string;
  /**
   * Number of decimal to show. If not defined, will use the raw value.
   */
  "precision"?: number;
  "text_align"?: WidgetTextAlign;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of value in the widget.
   */
  "title_size"?: string;
  "type": AlertValueWidgetDefinitionType;
  /**
   * Unit to display with the value.
   */
  "unit"?: string;
}

export interface ChangeWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": Array<ChangeWidgetRequest>;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": ChangeWidgetDefinitionType;
}

export interface CheckStatusWidgetDefinition {
  /**
   * Name of the check to use in the widget.
   */
  "check": string;
  /**
   * Group reporting a single check.
   */
  "group"?: string;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "group_by"?: Array<string>;
  "grouping": WidgetGrouping;
  /**
   * List of tags used to filter the groups reporting a cluster check.
   */
  "tags"?: Array<string>;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": CheckStatusWidgetDefinitionType;
}

export interface DistributionWidgetDefinition {
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "legend_size"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": Array<DistributionWidgetRequest>;
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "show_legend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": DistributionWidgetDefinitionType;
  "xaxis"?: DistributionWidgetXAxis;
  "yaxis"?: DistributionWidgetYAxis;
}

export interface EventStreamWidgetDefinition {
  "event_size"?: WidgetEventSize;
  /**
   * Query to filter the event stream with.
   */
  "query": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
   */
  "tags_execution"?: string;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": EventStreamWidgetDefinitionType;
}

export interface EventTimelineWidgetDefinition {
  /**
   * Query to filter the event timeline with.
   */
  "query": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
   */
  "tags_execution"?: string;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": EventTimelineWidgetDefinitionType;
}

export interface FreeTextWidgetDefinition {
  /**
   * Color of the text.
   */
  "color"?: string;
  /**
   * Size of the text.
   */
  "font_size"?: string;
  /**
   * Text to display.
   */
  "text": string;
  "text_align"?: WidgetTextAlign;
  "type": FreeTextWidgetDefinitionType;
}

export interface FunnelWidgetDefinition {
  /**
   * Request payload used to query items.
   */
  "requests": Array<FunnelWidgetRequest>;
  "time"?: WidgetTime;
  /**
   * The title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * The size of the title.
   */
  "title_size"?: string;
  "type": FunnelWidgetDefinitionType;
}

export interface GeomapWidgetDefinition {
  /**
   * A list of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * Array of one request object to display in the widget. The request must contain a `group-by` tag whose value is a country ISO code.  See the [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json) for information about building the `REQUEST_SCHEMA`.
   */
  "requests": Array<GeomapWidgetRequest>;
  "style": GeomapWidgetDefinitionStyle;
  "time"?: WidgetTime;
  /**
   * The title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * The size of the title.
   */
  "title_size"?: string;
  "type": GeomapWidgetDefinitionType;
  "view": GeomapWidgetDefinitionView;
}

export interface GroupWidgetDefinition {
  /**
   * Background color of the group title.
   */
  "background_color"?: string;
  /**
   * URL of image to display as a banner for the group.
   */
  "banner_img"?: string;
  "layout_type": WidgetLayoutType;
  /**
   * Whether to show the title or not.
   */
  "show_title"?: boolean;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  "type": GroupWidgetDefinitionType;
  /**
   * List of widget groups.
   */
  "widgets": Array<Widget>;
}

export interface HeatMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * List of widget events.
   */
  "events"?: Array<WidgetEvent>;
  /**
   * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
   */
  "legend_size"?: string;
  /**
   * List of widget types.
   */
  "requests": Array<HeatMapWidgetRequest>;
  /**
   * Whether or not to display the legend on this widget.
   */
  "show_legend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": HeatMapWidgetDefinitionType;
  "yaxis"?: WidgetAxis;
}

export interface HostMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * List of tag prefixes to group by.
   */
  "group"?: Array<string>;
  /**
   * Whether to show the hosts that don’t fit in a group.
   */
  "no_group_hosts"?: boolean;
  /**
   * Whether to show the hosts with no metrics.
   */
  "no_metric_hosts"?: boolean;
  "node_type"?: WidgetNodeType;
  /**
   * Notes on the title.
   */
  "notes"?: string;
  "requests": HostMapWidgetDefinitionRequests;
  /**
   * List of tags used to filter the map.
   */
  "scope"?: Array<string>;
  "style"?: HostMapWidgetDefinitionStyle;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": HostMapWidgetDefinitionType;
}

export interface IFrameWidgetDefinition {
  "type": IFrameWidgetDefinitionType;
  /**
   * URL of the iframe.
   */
  "url": string;
}

export interface ImageWidgetDefinition {
  /**
   * Whether to display a background or not.
   */
  "has_background"?: boolean;
  /**
   * Whether to display a border or not.
   */
  "has_border"?: boolean;
  "horizontal_align"?: WidgetHorizontalAlign;
  "margin"?: WidgetMargin;
  "sizing"?: WidgetImageSizing;
  "type": ImageWidgetDefinitionType;
  /**
   * URL of the image.
   */
  "url": string;
  /**
   * URL of the image in dark mode.
   */
  "url_dark_theme"?: string;
  "vertical_align"?: WidgetVerticalAlign;
}

export interface ListStreamWidgetDefinition {
  /**
   * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
   */
  "legend_size"?: string;
  /**
   * Request payload used to query items.
   */
  "requests": Array<ListStreamWidgetRequest>;
  /**
   * Whether or not to display the legend on this widget.
   */
  "show_legend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": ListStreamWidgetDefinitionType;
}

export interface LogStreamWidgetDefinition {
  /**
   * Which columns to display on the widget.
   */
  "columns"?: Array<string>;
  /**
   * An array of index names to query in the stream. Use [] to query all indexes at once.
   */
  "indexes"?: Array<string>;
  /**
   * ID of the log set to use.
   */
  "logset"?: string;
  "message_display"?: WidgetMessageDisplay;
  /**
   * Query to filter the log stream with.
   */
  "query"?: string;
  /**
   * Whether to show the date column or not
   */
  "show_date_column"?: boolean;
  /**
   * Whether to show the message column or not
   */
  "show_message_column"?: boolean;
  "sort"?: WidgetFieldSort;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": LogStreamWidgetDefinitionType;
}

export interface MonitorSummaryWidgetDefinition {
  "color_preference"?: WidgetColorPreference;
  /**
   * The number of monitors to display.
   */
  "count"?: number;
  "display_format"?: WidgetMonitorSummaryDisplayFormat;
  /**
   * Whether to show counts of 0 or not.
   */
  "hide_zero_counts"?: boolean;
  /**
   * Query to filter the monitors with.
   */
  "query": string;
  /**
   * Whether to show the time that has elapsed since the monitor/group triggered.
   */
  "show_last_triggered"?: boolean;
  "sort"?: WidgetMonitorSummarySort;
  /**
   * The start of the list. Typically 0.
   */
  "start"?: number;
  "summary_type"?: WidgetSummaryType;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": MonitorSummaryWidgetDefinitionType;
}

export interface NoteWidgetDefinition {
  /**
   * Background color of the note.
   */
  "background_color"?: string;
  /**
   * Content of the note.
   */
  "content": string;
  /**
   * Size of the text.
   */
  "font_size"?: string;
  /**
   * Whether to add padding or not.
   */
  "has_padding"?: boolean;
  /**
   * Whether to show a tick or not.
   */
  "show_tick"?: boolean;
  "text_align"?: WidgetTextAlign;
  "tick_edge"?: WidgetTickEdge;
  /**
   * Where to position the tick on an edge.
   */
  "tick_pos"?: string;
  "type": NoteWidgetDefinitionType;
  "vertical_align"?: WidgetVerticalAlign;
}

export interface QueryValueWidgetDefinition {
  /**
   * Whether to use auto-scaling or not.
   */
  "autoscale"?: boolean;
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * Display a unit of your choice on the widget.
   */
  "custom_unit"?: string;
  /**
   * Number of decimals to show. If not defined, the widget uses the raw value.
   */
  "precision"?: number;
  /**
   * Widget definition.
   */
  "requests": Array<QueryValueWidgetRequest>;
  "text_align"?: WidgetTextAlign;
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": QueryValueWidgetDefinitionType;
}

export interface SLOWidgetDefinition {
  /**
   * Defined global time target.
   */
  "global_time_target"?: string;
  /**
   * Defined error budget.
   */
  "show_error_budget"?: boolean;
  /**
   * ID of the SLO displayed.
   */
  "slo_id"?: string;
  /**
   * Times being monitored.
   */
  "time_windows"?: Array<WidgetTimeWindows>;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": SLOWidgetDefinitionType;
  "view_mode"?: WidgetViewMode;
  /**
   * Type of view displayed by the widget.
   */
  "view_type": string;
}

export interface ScatterPlotWidgetDefinition {
  /**
   * List of groups used for colors.
   */
  "color_by_groups"?: Array<string>;
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  "requests": ScatterPlotWidgetDefinitionRequests;
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": ScatterPlotWidgetDefinitionType;
  "xaxis"?: WidgetAxis;
  "yaxis"?: WidgetAxis;
}

export interface ServiceMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * Your environment and primary tag (or * if enabled for your account).
   */
  "filters": Array<string>;
  /**
   * The ID of the service you want to map.
   */
  "service": string;
  /**
   * The title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": ServiceMapWidgetDefinitionType;
}

export interface ServiceSummaryWidgetDefinition {
  "display_format"?: WidgetServiceSummaryDisplayFormat;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * APM service.
   */
  "service": string;
  /**
   * Whether to show the latency breakdown or not.
   */
  "show_breakdown"?: boolean;
  /**
   * Whether to show the latency distribution or not.
   */
  "show_distribution"?: boolean;
  /**
   * Whether to show the error metrics or not.
   */
  "show_errors"?: boolean;
  /**
   * Whether to show the hits metrics or not.
   */
  "show_hits"?: boolean;
  /**
   * Whether to show the latency metrics or not.
   */
  "show_latency"?: boolean;
  /**
   * Whether to show the resource list or not.
   */
  "show_resource_list"?: boolean;
  "size_format"?: WidgetSizeFormat;
  /**
   * APM span name.
   */
  "span_name": string;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": ServiceSummaryWidgetDefinitionType;
}

export interface TableWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  "has_search_bar"?: TableWidgetHasSearchBar;
  /**
   * Widget definition.
   */
  "requests": Array<TableWidgetRequest>;
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": TableWidgetDefinitionType;
}

export interface TimeseriesWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * List of widget events.
   */
  "events"?: Array<WidgetEvent>;
  /**
   * Columns displayed in the legend.
   */
  "legend_columns"?: Array<TimeseriesWidgetLegendColumn>;
  "legend_layout"?: TimeseriesWidgetLegendLayout;
  /**
   * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
   */
  "legend_size"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * List of timeseries widget requests.
   */
  "requests": Array<TimeseriesWidgetRequest>;
  "right_yaxis"?: WidgetAxis;
  /**
   * (screenboard only) Show the legend for this widget.
   */
  "show_legend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": TimeseriesWidgetDefinitionType;
  "yaxis"?: WidgetAxis;
}

export interface ToplistWidgetDefinition {
  /**
   * List of custom links.
   */
  "custom_links"?: Array<WidgetCustomLink>;
  /**
   * List of top list widget requests.
   */
  "requests": Array<ToplistWidgetRequest>;
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "title_align"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "title_size"?: string;
  "type": ToplistWidgetDefinitionType;
}

export interface TreeMapWidgetDefinition {
  "color_by": TreeMapColorBy;
  "group_by": TreeMapGroupBy;
  /**
   * List of top list widget requests.
   */
  "requests": Array<TreeMapWidgetRequest>;
  "size_by": TreeMapSizeBy;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "type": TreeMapWidgetDefinitionType;
}

export type AlertGraphWidgetDefinitionType = "alert_graph";

export type WidgetTextAlign =
| "center"
| "left"
| "right"
;

export interface WidgetTime {
  "live_span"?: WidgetLiveSpan;
}

export type WidgetVizType =
| "timeseries"
| "toplist"
;

export type AlertValueWidgetDefinitionType = "alert_value";

export type ChangeWidgetDefinitionType = "change";

export interface ChangeWidgetRequest {
  "apm_query"?: LogQueryDefinition;
  "change_type"?: WidgetChangeType;
  "compare_to"?: WidgetCompareTo;
  "event_query"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * Whether to show increase as good.
   */
  "increase_good"?: boolean;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "order_by"?: WidgetOrderBy;
  "order_dir"?: WidgetSort;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
  /**
   * Whether to show the present value.
   */
  "show_present"?: boolean;
}

export interface WidgetCustomLink {
  /**
   * The flag for toggling context menu link visibility.
   */
  "is_hidden"?: boolean;
  /**
   * The label for the custom link URL. Keep the label short and descriptive. Use metrics and tags as variables.
   */
  "label"?: string;
  /**
   * The URL of the custom link. URL must include `http` or `https`. A relative URL must start with `/`.
   */
  "link"?: string;
  /**
   * The label ID that refers to a context menu link. Can be `logs`, `hosts`, `traces`, `profiles`, `processes`, `containers`, or `rum`.
   */
  "override_label"?: string;
}

export type CheckStatusWidgetDefinitionType = "check_status";

export type WidgetGrouping =
| "check"
| "cluster"
;

export type DistributionWidgetDefinitionType = "distribution";

export interface DistributionWidgetRequest {
  "apm_query"?: LogQueryDefinition;
  "apm_stats_query"?: ApmStatsQueryDefinition;
  "event_query"?: LogQueryDefinition;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
  "style"?: WidgetStyle;
}

export interface DistributionWidgetXAxis {
  /**
   * True includes zero.
   */
  "include_zero"?: boolean;
  /**
   * Specifies maximum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear`.
   */
  "scale"?: string;
}

export interface DistributionWidgetYAxis {
  /**
   * True includes zero.
   */
  "include_zero"?: boolean;
  /**
   * The label of the axis to display on the graph.
   */
  "label"?: string;
  /**
   * Specifies the maximum value to show on the y-axis. It takes a number, or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the y-axis. It takes a number, or auto for default behavior.
   */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear` or `log`.
   */
  "scale"?: string;
}

export interface WidgetMarker {
  /**
   * Combination of:   - A severity error, warning, ok, or info   - A line type: dashed, solid, or bold In this case of a Distribution widget, this can be set to be `x_axis_percentile`.
   */
  "display_type"?: string;
  /**
   * Label to display over the marker.
   */
  "label"?: string;
  /**
   * Timestamp for the widget.
   */
  "time"?: string;
  /**
   * Value to apply. Can be a single value y = 15 or a range of values 0 < y < 10.
   */
  "value": string;
}

export type EventStreamWidgetDefinitionType = "event_stream";

export type WidgetEventSize =
| "s"
| "l"
;

export type EventTimelineWidgetDefinitionType = "event_timeline";

export type FreeTextWidgetDefinitionType = "free_text";

export type FunnelWidgetDefinitionType = "funnel";

export interface FunnelWidgetRequest {
  "query": FunnelQuery;
  "request_type": FunnelRequestType;
}

export interface GeomapWidgetDefinitionStyle {
  /**
   * The color palette to apply to the widget.
   */
  "palette": string;
  /**
   * Whether to flip the palette tones.
   */
  "palette_flip": boolean;
}

export type GeomapWidgetDefinitionType = "geomap";

export interface GeomapWidgetDefinitionView {
  /**
   * The 2-letter ISO code of a country to focus the map on. Or `WORLD`.
   */
  "focus": string;
}

export interface GeomapWidgetRequest {
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  "log_query"?: LogQueryDefinition;
  /**
   * The widget metrics query.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
}

export type GroupWidgetDefinitionType = "group";

export type WidgetLayoutType = "ordered";

export type HeatMapWidgetDefinitionType = "heatmap";

export interface HeatMapWidgetRequest {
  "apm_query"?: LogQueryDefinition;
  "event_query"?: EventQueryDefinition;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
  "style"?: WidgetStyle;
}

export interface WidgetAxis {
  /**
   * True includes zero.
   */
  "include_zero"?: boolean;
  /**
   * The label of the axis to display on the graph.
   */
  "label"?: string;
  /**
   * Specifies the maximum value to show on the y-axis. It takes a number, or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the y-axis. It takes a number, or auto for default behavior.
   */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear`, `log`, `sqrt`, `pow##` (e.g. `pow2`, `pow0.5` etc.).
   */
  "scale"?: string;
}

export interface WidgetEvent {
  /**
   * Query definition.
   */
  "q": string;
  /**
   * The execution method for multi-value filters.
   */
  "tags_execution"?: string;
}

export interface HostMapWidgetDefinitionRequests {
  "fill"?: HostMapRequest;
  "size"?: HostMapRequest;
}

export interface HostMapWidgetDefinitionStyle {
  /**
   * Max value to use to color the map.
   */
  "fill_max"?: string;
  /**
   * Min value to use to color the map.
   */
  "fill_min"?: string;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;
  /**
   * Whether to flip the palette tones.
   */
  "palette_flip"?: boolean;
}

export type HostMapWidgetDefinitionType = "hostmap";

export type WidgetNodeType =
| "host"
| "container"
;

export type IFrameWidgetDefinitionType = "iframe";

export type ImageWidgetDefinitionType = "image";

export type WidgetHorizontalAlign =
| "center"
| "left"
| "right"
;

export type WidgetImageSizing =
| "fill"
| "contain"
| "cover"
| "none"
| "scale-down"
| "zoom"
| "fit"
| "center"
;

export type WidgetMargin =
| "sm"
| "md"
| "lg"
| "small"
| "large"
;

export type WidgetVerticalAlign =
| "center"
| "top"
| "bottom"
;

export type ListStreamWidgetDefinitionType = "list_stream";

export interface ListStreamWidgetRequest {
  /**
   * Widget columns.
   */
  "columns": Array<ListStreamColumn>;
  "query": ListStreamQuery;
  "response_format": ListStreamResponseFormat;
}

export type LogStreamWidgetDefinitionType = "log_stream";

export interface WidgetFieldSort {
  /**
   * Facet path for the column
   */
  "column": string;
  "order": WidgetSort;
}

export type WidgetMessageDisplay =
| "inline"
| "expanded-md"
| "expanded-lg"
;

export type MonitorSummaryWidgetDefinitionType = "manage_status";

export type WidgetColorPreference =
| "background"
| "text"
;

export type WidgetMonitorSummaryDisplayFormat =
| "counts"
| "countsAndList"
| "list"
;

export type WidgetMonitorSummarySort =
| "name"
| "group"
| "status"
| "tags"
| "triggered"
| "group,asc"
| "group,desc"
| "name,asc"
| "name,desc"
| "status,asc"
| "status,desc"
| "tags,asc"
| "tags,desc"
| "triggered,asc"
| "triggered,desc"
;

export type WidgetSummaryType =
| "monitors"
| "groups"
| "combined"
;

export type NoteWidgetDefinitionType = "note";

export type WidgetTickEdge =
| "bottom"
| "left"
| "right"
| "top"
;

export type QueryValueWidgetDefinitionType = "query_value";

export interface QueryValueWidgetRequest {
  "aggregator"?: WidgetAggregator;
  "apm_query"?: LogQueryDefinition;
  "audit_query"?: LogQueryDefinition;
  /**
   * List of conditional formats.
   */
  "conditional_formats"?: Array<WidgetConditionalFormat>;
  "event_query"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * TODO.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
}

export type SLOWidgetDefinitionType = "slo";

export type WidgetTimeWindows =
| "7d"
| "30d"
| "90d"
| "week_to_date"
| "previous_week"
| "month_to_date"
| "previous_month"
| "global_time"
;

export type WidgetViewMode =
| "overall"
| "component"
| "both"
;

export interface ScatterPlotWidgetDefinitionRequests {
  "table"?: ScatterplotTableRequest;
  "x"?: ScatterPlotRequest;
  "y"?: ScatterPlotRequest;
}

export type ScatterPlotWidgetDefinitionType = "scatterplot";

export type ServiceMapWidgetDefinitionType = "servicemap";

export type ServiceSummaryWidgetDefinitionType = "trace_service";

export type WidgetServiceSummaryDisplayFormat =
| "one_column"
| "two_column"
| "three_column"
;

export type WidgetSizeFormat =
| "small"
| "medium"
| "large"
;

export type TableWidgetDefinitionType = "query_table";

export type TableWidgetHasSearchBar =
| "always"
| "never"
| "auto"
;

export interface TableWidgetRequest {
  "aggregator"?: WidgetAggregator;
  /**
   * The column name (defaults to the metric name).
   */
  "alias"?: string;
  "apm_query"?: LogQueryDefinition;
  "apm_stats_query"?: ApmStatsQueryDefinition;
  /**
   * A list of display modes for each table cell.
   */
  "cell_display_mode"?: Array<TableWidgetCellDisplayMode>;
  /**
   * List of conditional formats.
   */
  "conditional_formats"?: Array<WidgetConditionalFormat>;
  "event_query"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * For metric queries, the number of lines to show in the table. Only one request should have this property.
   */
  "limit"?: number;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "order"?: WidgetSort;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
}

export type TimeseriesWidgetDefinitionType = "timeseries";

export type TimeseriesWidgetLegendColumn =
| "value"
| "avg"
| "sum"
| "min"
| "max"
;

export type TimeseriesWidgetLegendLayout =
| "auto"
| "horizontal"
| "vertical"
;

export interface TimeseriesWidgetRequest {
  "apm_query"?: LogQueryDefinition;
  "audit_query"?: LogQueryDefinition;
  "display_type"?: WidgetDisplayType;
  "event_query"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  "log_query"?: LogQueryDefinition;
  /**
   * Used to define expression aliases.
   */
  "metadata"?: Array<TimeseriesWidgetExpressionAlias>;
  "network_query"?: LogQueryDefinition;
  /**
   * Whether or not to display a second y-axis on the right.
   */
  "on_right_yaxis"?: boolean;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
  "style"?: WidgetRequestStyle;
}

export type ToplistWidgetDefinitionType = "toplist";

export interface ToplistWidgetRequest {
  "apm_query"?: LogQueryDefinition;
  "audit_query"?: LogQueryDefinition;
  /**
   * List of conditional formats.
   */
  "conditional_formats"?: Array<WidgetConditionalFormat>;
  "event_query"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
  "style"?: WidgetRequestStyle;
}

export type TreeMapColorBy = "user";

export type TreeMapGroupBy =
| "user"
| "family"
| "process"
;

export type TreeMapSizeBy =
| "pct_cpu"
| "pct_mem"
;

export type TreeMapWidgetDefinitionType = "treemap";

export interface TreeMapWidgetRequest {
  /**
   * The widget metrics query.
   */
  "q"?: string;
}

export type WidgetLiveSpan =
| "1m"
| "5m"
| "10m"
| "15m"
| "30m"
| "1h"
| "4h"
| "1d"
| "2d"
| "1w"
| "1mo"
| "3mo"
| "6mo"
| "1y"
| "alert"
;

export type FormulaAndFunctionQueryDefinition =
  | FormulaAndFunctionApmDependencyStatsQueryDefinition
  | FormulaAndFunctionApmResourceStatsQueryDefinition
  | FormulaAndFunctionEventQueryDefinition
  | FormulaAndFunctionMetricQueryDefinition
  | FormulaAndFunctionProcessQueryDefinition
;

export type FormulaAndFunctionResponseFormat =
| "timeseries"
| "scalar"
;

export interface LogQueryDefinition {
  "compute"?: LogsQueryCompute;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "group_by"?: Array<LogQueryDefinitionGroupBy>;
  /**
   * A coma separated-list of index names. Use \"*\" query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes)
   */
  "index"?: string;
  /**
   * This field is mutually exclusive with `compute`.
   */
  "multi_compute"?: Array<LogsQueryCompute>;
  "search"?: LogQueryDefinitionSearch;
}

export interface ProcessQueryDefinition {
  /**
   * List of processes.
   */
  "filter_by"?: Array<string>;
  /**
   * Max number of items in the filter list.
   */
  "limit"?: number;
  /**
   * Your chosen metric.
   */
  "metric": string;
  /**
   * Your chosen search term.
   */
  "search_by"?: string;
}

export type WidgetChangeType =
| "absolute"
| "relative"
;

export type WidgetCompareTo =
| "hour_before"
| "day_before"
| "week_before"
| "month_before"
;

export interface WidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  "cell_display_mode"?: TableWidgetCellDisplayMode;
  /**
   * List of conditional formats.
   */
  "conditional_formats"?: Array<WidgetConditionalFormat>;
  /**
   * String expression built from queries, formulas, and functions.
   */
  "formula": string;
  "limit"?: WidgetFormulaLimit;
}

export type WidgetOrderBy =
| "change"
| "name"
| "present"
| "past"
;

export type WidgetSort =
| "asc"
| "desc"
;

export interface ApmStatsQueryDefinition {
  /**
   * Column properties used by the front end for display.
   */
  "columns"?: Array<ApmStatsQueryColumnType>;
  /**
   * Environment name.
   */
  "env": string;
  /**
   * Operation name associated with service.
   */
  "name": string;
  /**
   * The organization's host group name and value.
   */
  "primary_tag": string;
  /**
   * Resource name.
   */
  "resource"?: string;
  "row_type": ApmStatsQueryRowType;
  /**
   * Service name.
   */
  "service": string;
}

export interface WidgetStyle {
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;
}

export interface FunnelQuery {
  "data_source": FunnelSource;
  /**
   * The widget query.
   */
  "query_string": string;
  /**
   * List of funnel steps.
   */
  "steps": Array<any>;
}

export type FunnelRequestType = "funnel";

export interface EventQueryDefinition {
  /**
   * The query being made on the event.
   */
  "search": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
   */
  "tags_execution": string;
}

export interface HostMapRequest {
  "apm_query"?: LogQueryDefinition;
  "event_query"?: LogQueryDefinition;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
}

export interface ListStreamColumn {
  /**
   * Widget column field.
   */
  "field": string;
  "width": ListStreamColumnWidth;
}

export interface ListStreamQuery {
  "data_source": ListStreamSource;
  /**
   * List of indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Widget query.
   */
  "query_string": string;
}

export type ListStreamResponseFormat = "event_list";

export type WidgetAggregator =
| "avg"
| "last"
| "max"
| "min"
| "sum"
| "percentile"
;

export interface WidgetConditionalFormat {
  "comparator": WidgetComparator;
  /**
   * Color palette to apply to the background, same values available as palette.
   */
  "custom_bg_color"?: string;
  /**
   * Color palette to apply to the foreground, same values available as palette.
   */
  "custom_fg_color"?: string;
  /**
   * True hides values.
   */
  "hide_value"?: boolean;
  /**
   * Displays an image as the background.
   */
  "image_url"?: string;
  /**
   * Metric from the request to correlate this conditional format with.
   */
  "metric"?: string;
  "palette": WidgetPalette;
  /**
   * Defines the displayed timeframe.
   */
  "timeframe"?: string;
  /**
   * Value for the comparator.
   */
  "value": number;
}

export interface ScatterPlotRequest {
  "aggregator"?: ScatterplotWidgetAggregator;
  "apm_query"?: LogQueryDefinition;
  "event_query"?: LogQueryDefinition;
  "log_query"?: LogQueryDefinition;
  "network_query"?: LogQueryDefinition;
  "process_query"?: ProcessQueryDefinition;
  "profile_metrics_query"?: LogQueryDefinition;
  /**
   * Query definition.
   */
  "q"?: string;
  "rum_query"?: LogQueryDefinition;
  "security_query"?: LogQueryDefinition;
}

export interface ScatterplotTableRequest {
  /**
   * List of Scatterplot formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<ScatterplotWidgetFormula>;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "response_format"?: FormulaAndFunctionResponseFormat;
}

export type TableWidgetCellDisplayMode =
| "number"
| "bar"
;

export interface TimeseriesWidgetExpressionAlias {
  /**
   * Expression alias.
   */
  "alias_name"?: string;
  /**
   * Expression name.
   */
  "expression": string;
}

export type WidgetDisplayType =
| "area"
| "bars"
| "line"
;

export interface WidgetRequestStyle {
  "line_type"?: WidgetLineType;
  "line_width"?: WidgetLineWidth;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;
}

export interface FormulaAndFunctionApmDependencyStatsQueryDefinition {
  "data_source": FormulaAndFunctionApmDependencyStatsDataSource;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * Determines whether stats for upstream or downstream dependencies should be queried.
   */
  "is_upstream"?: boolean;
  /**
   * Name of query to use in formulas.
   */
  "name": string;
  /**
   * Name of operation on service.
   */
  "operation_name": string;
  /**
   * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
   */
  "primary_tag_name"?: string;
  /**
   * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
   */
  "primary_tag_value"?: string;
  /**
   * APM resource.
   */
  "resource_name": string;
  /**
   * APM service.
   */
  "service": string;
  "stat": FormulaAndFunctionApmDependencyStatName;
}

export interface FormulaAndFunctionApmResourceStatsQueryDefinition {
  "data_source": FormulaAndFunctionApmResourceStatsDataSource;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * Array of fields to group results by.
   */
  "group_by"?: Array<string>;
  /**
   * Name of this query to use in formulas.
   */
  "name": string;
  /**
   * Name of operation on service.
   */
  "operation_name"?: string;
  /**
   * Name of the second primary tag used within APM. Required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog
   */
  "primary_tag_name"?: string;
  /**
   * Value of the second primary tag by which to filter APM data. `primary_tag_name` must also be specified.
   */
  "primary_tag_value"?: string;
  /**
   * APM resource name.
   */
  "resource_name"?: string;
  /**
   * APM service name.
   */
  "service": string;
  "stat": FormulaAndFunctionApmResourceStatName;
}

export interface FormulaAndFunctionEventQueryDefinition {
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  "data_source": FormulaAndFunctionEventsDataSource;
  /**
   * Group by options.
   */
  "group_by"?: Array<FormulaAndFunctionEventQueryGroupBy>;
  /**
   * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
   */
  "indexes"?: Array<string>;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  "search"?: FormulaAndFunctionEventQueryDefinitionSearch;
}

export interface FormulaAndFunctionMetricQueryDefinition {
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  "data_source": FormulaAndFunctionMetricDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Metrics query definition.
   */
  "query": string;
}

export interface FormulaAndFunctionProcessQueryDefinition {
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  "data_source": FormulaAndFunctionProcessQueryDataSource;
  /**
   * Whether to normalize the CPU percentages.
   */
  "is_normalized_cpu"?: boolean;
  /**
   * Number of hits to return.
   */
  "limit"?: number;
  /**
   * Process metric name.
   */
  "metric": string;
  /**
   * Name of query for use in formulas.
   */
  "name": string;
  "sort"?: QuerySortOrder;
  /**
   * An array of tags to filter by.
   */
  "tag_filters"?: Array<string>;
  /**
   * Text to use as filter.
   */
  "text_filter"?: string;
}

export interface LogQueryDefinitionGroupBy {
  /**
   * Facet name.
   */
  "facet": string;
  /**
   * Maximum number of items in the group.
   */
  "limit"?: number;
  "sort"?: LogQueryDefinitionGroupBySort;
}

export interface LogQueryDefinitionSearch {
  /**
   * Search value to apply.
   */
  "query": string;
}

export interface LogsQueryCompute {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  /**
   * Define a time interval in seconds.
   */
  "interval"?: number;
}

export interface WidgetFormulaLimit {
  /**
   * Number of results to return.
   */
  "count"?: number;
  "order"?: QuerySortOrder;
}

export interface ApmStatsQueryColumnType {
  /**
   * A user-assigned alias for the column.
   */
  "alias"?: string;
  "cell_display_mode"?: TableWidgetCellDisplayMode;
  /**
   * Column name.
   */
  "name": string;
  "order"?: WidgetSort;
}

export type ApmStatsQueryRowType =
| "service"
| "resource"
| "span"
;

export type FunnelSource = "rum";

export type ListStreamColumnWidth =
| "auto"
| "compact"
| "full"
;

export type ListStreamSource =
| "issue_stream"
| "logs_stream"
| "audit_stream"
;

export type WidgetComparator =
| ">"
| ">="
| "<"
| "<="
;

export type WidgetPalette =
| "blue"
| "custom_bg"
| "custom_image"
| "custom_text"
| "gray_on_white"
| "grey"
| "green"
| "orange"
| "red"
| "red_on_white"
| "white_on_gray"
| "white_on_green"
| "green_on_white"
| "white_on_red"
| "white_on_yellow"
| "yellow_on_white"
| "black_on_light_yellow"
| "black_on_light_green"
| "black_on_light_red"
;

export type ScatterplotWidgetAggregator =
| "avg"
| "last"
| "max"
| "min"
| "sum"
;

export interface ScatterplotWidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  "dimension": ScatterplotDimension;
  /**
   * String expression built from queries, formulas, and functions.
   */
  "formula": string;
}

export type WidgetLineType =
| "dashed"
| "dotted"
| "solid"
;

export type WidgetLineWidth =
| "normal"
| "thick"
| "thin"
;

export type FormulaAndFunctionApmDependencyStatName =
| "avg_duration"
| "avg_root_duration"
| "avg_spans_per_trace"
| "error_rate"
| "pct_exec_time"
| "pct_of_traces"
| "total_traces_count"
;

export type FormulaAndFunctionApmDependencyStatsDataSource = "apm_dependency_stats";

export type FormulaAndFunctionApmResourceStatName =
| "errors"
| "error_rate"
| "hits"
| "latency_avg"
| "latency_max"
| "latency_p50"
| "latency_p75"
| "latency_p90"
| "latency_p95"
| "latency_p99"
;

export type FormulaAndFunctionApmResourceStatsDataSource = "apm_resource_stats";

export interface FormulaAndFunctionEventQueryDefinitionCompute {
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * A time interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
   */
  "metric"?: string;
}

export interface FormulaAndFunctionEventQueryDefinitionSearch {
  /**
   * Events search string.
   */
  "query": string;
}

export interface FormulaAndFunctionEventQueryGroupBy {
  /**
   * Event facet.
   */
  "facet": string;
  /**
   * Number of groups to return.
   */
  "limit"?: number;
  "sort"?: FormulaAndFunctionEventQueryGroupBySort;
}

export type FormulaAndFunctionEventsDataSource =
| "logs"
| "spans"
| "network"
| "rum"
| "security_signals"
| "profiles"
| "audit"
| "events"
;

export type FormulaAndFunctionMetricAggregation =
| "avg"
| "min"
| "max"
| "sum"
| "last"
| "area"
| "l2norm"
| "percentile"
;

export type FormulaAndFunctionMetricDataSource = "metrics";

export type FormulaAndFunctionProcessQueryDataSource =
| "process"
| "container"
;

export type QuerySortOrder =
| "asc"
| "desc"
;

export interface LogQueryDefinitionGroupBySort {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  "order": WidgetSort;
}

export type ScatterplotDimension =
| "x"
| "y"
| "radius"
| "color"
;

export type FormulaAndFunctionEventAggregation =
| "count"
| "cardinality"
| "median"
| "pc75"
| "pc90"
| "pc95"
| "pc98"
| "pc99"
| "sum"
| "min"
| "max"
| "avg"
;

export interface FormulaAndFunctionEventQueryGroupBySort {
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * Metric used for sorting group by results.
   */
  "metric"?: string;
  "order"?: QuerySortOrder;
}

