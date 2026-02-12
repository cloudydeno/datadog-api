![Deno CI](https://github.com/cloudydeno/deno-datadog_api/workflows/CI/badge.svg?branch=main)

# `/x/datadog_api`: Deno library for Datadog

Very incomplete Typescript client
for [Datadog's API](https://docs.datadoghq.com/api/v1/).

## Purpose

My primary goal is to give important parts of the Datadog API
a typed interface for use in Deno scripts.
I'm comparing API docs with actual API payloads as much as possible.
If you just want to make calls and get JSON back,
you can use the `datadog.fetchJson({...})` function.

PS: This library doesn't really depend on Deno APIs,
it's just targetting Deno as a runtime (Typescript, URL imports, fetch, etc).

### Implemented APIs

* `v1Dashboards`: get by id, list all
* `v1Metrics`: submit custom data series points to Datadog
    * For a working example of metrics submission, see `examples/emit-metrics.ts`
* `v1Monitors`: get by id, get all, search by query
* `v1ServiceChecks`: submit 'check run' statuses to Datadog
* `v1ServiceDependencies`: list APM services and their dependencies
* `v1Events`: submit events to Datadog
* `v1UsageMetering`: get billable summary, get top custom metrics
* `v2Roles`: list and describe roles & permissions
* `v2Users`: list, search, and describe datadog users
* `v2Teams`: list, search, and describe datadog teams

If you want a different API not listed here,
please open a Github issue or PR into `v1/` or `v2/` as appropriate.
In the meantime you can use `fetchJson` for such APIs.

## Usage

Importing `mod.ts` gives you the whole implemented API surface.

```typescript
import DatadogApi from "https://deno.land/x/datadog_api/mod.ts";

// Set up an API client using DATADOG_API_KEY and such
const datadog = DatadogApi.fromEnvironment(Deno.env);

// Optionally check that our API key works, without actually doing anything
await datadog.validateAccess();

// Perform a monitor search by tag
const {monitors} = await datadog.v1Monitors.search('env:"prod"');
console.log("First monitor:", monitors[0]);

// Or, directly fetch JSON (for using APIs that don't have functions yet)
const dashboardLists = await datadog.fetchJson({
  path: '/api/v2/dashboard/lists/manual',
});
```

### Selective Imports

You can also import specific parts of this module by
starting with `client.ts` and adding specific APIs from `v1/` or `v2/`.
This lets you skip downloading APIs you don't plan on using.

```typescript
// Assemble an API client manually
import ApiClient from "https://deno.land/x/datadog_api/client.ts";
const datadog = new ApiClient({
  apiKey: Deno.env.get("DATADOG_API_KEY"),
  appKey: Deno.env.get("DATADOG_APP_KEY"),
  apiBase: Deno.env.get("DATADOG_HOST"), // defaults to US server
});

// Set up a Monitors API client
import V1MonitorsApi from "https://deno.land/x/datadog_api/v1/monitors.ts";
const monitorsApi = new V1MonitorsApi(datadog);

// Get a monitor
console.log(await monitorsApi.getOne("234231"));
```

## License

MIT License
