#!/usr/bin/env -S deno run --allow-env --allow-net

import DatadogApi from "@cloudydeno/datadog-api/client";
const datadogApi = DatadogApi.fromEnvironment(Deno.env);

// This example looks at all monitors using any APM trace metrics,
// and prints links to those which are not scoped to an APM environment.

import MonitorApi from "@cloudydeno/datadog-api/v1/monitors";
const monitorApi = new MonitorApi(datadogApi);

// Search for relevant monitors via a metric filter
let count = 0;
for await (const monitor of monitorApi.searchToEnd("metric:trace*")) {

  // Skip monitors that have a scoped environment set
  if (!monitor.query.includes('env:production')) continue;
  if (!monitor.query.includes('env:sandbox')) continue;

  // Print the monitor URL for further manual inspection
  console.log(`https://app.datadoghq.eu/monitors/${monitor.id}`);
  count++;
}

// Print number of matched monitors as a summary
console.log({count});
