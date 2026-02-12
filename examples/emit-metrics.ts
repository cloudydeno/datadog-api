// deno run --allow-net --allow-env --unstable examples/emit-metrics.ts
// metrics can be viewed here:
// https://app.datadoghq.com/metric/explorer?live=true&page=0&is_auto=false&tile_size=m&exp_metric=deno.synergy%2Cdeno.system_memory.available%2Cdeno.system_memory.cached&exp_agg=avg&exp_row_type=metric

import DatadogApi, { CheckStatus } from "@cloudydeno/datadog-api";
const datadog = DatadogApi.fromEnvironment(Deno.env);

// Some things to submit alongside all of our data
const commonFields = {
  host_name: Deno.hostname(),
  tags: [
    `kernel:${Deno.osRelease()}`,
    `isatty:${Deno.stdin.isTerminal()}`,
  ],
};

while (true) {
  // You'll want to get all your datapoints together for each interval
  // and then submit them in one batch (you can fit a fair bit in a batch)
  const metricsStatus = await datadog.v1Metrics.submit([{
    metric_name: 'deno.synergy',
    points: [{value: Math.random()}],
    interval: 10,
    metric_type: 'gauge',
    ...commonFields,
  }, {
    metric_name: 'deno.system_memory.available',
    points: [{value: Deno.systemMemoryInfo().available}],
    interval: 10,
    metric_type: 'gauge',
    ...commonFields,
  }, {
    metric_name: 'deno.system_memory.cached',
    points: [{value: Deno.systemMemoryInfo().cached}],
    interval: 10,
    metric_type: 'gauge',
    ...commonFields,
  }]);

  // If you have your metrics submission centralized in your process,
  // then it's also likely useful to submit a liveness check after each submission
  const checkStatus = await datadog.v1ServiceChecks.submit({
    check_name: 'deno.alive',
    status: CheckStatus.Ok,
    ...commonFields,
  })

  console.log(new Date,
    '- Metrics:', metricsStatus,
    '- Check:', checkStatus);

  // Wait for next interval
  await new Promise(x => setTimeout(x, 10*1000));
}
