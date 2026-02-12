// Make automatic client from environment variables
import DatadogApi from "@cloudydeno/datadog-api";
const datadog = DatadogApi.fromEnvironment(Deno.env);

console.log('Auth is valid:', await datadog.validateAccess());

// Perform a monitor search by tag
const results = await datadog
  .v1Monitors.search('NOT tag:"terraformed"', {
    per_page: 1,
  });
console.log("First monitor:", results.monitors[0]);
console.log("Monitor facets:", results.counts);

// Pull billing summary for a given month
const { usage: [topMetric] } = await datadog
  .v1UsageMetering.getTopCustomMetrics('2020-09');
console.log('Your top custom metric:', topMetric);

// Raw JSON fetch
console.log(await datadog.fetchJson({
  path: '/api/v2/dashboard/lists/manual',
}));
