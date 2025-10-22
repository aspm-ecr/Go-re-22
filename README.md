# ###########################################################
# PLEASE NOTE:  DOW Demo YAML File located in Root Directory
# ###########################################################

# vue-hn-clone

This app is a Vue.js-based clone of [Hacker News](https://hn.ycombinator.com).

## Objective

It is helpful to have a go-to app for demoing new tools - this is mine. It's nice to have an app that is more than just a hello world, so I tried to create one that mirrors something usable to some degree.

> Oct 16, 2025: lightweight README touch-up to re-trigger the component workflow for remediation validation runs.

## Tech info

- [Vue.js](https://vuejs.org/) - The frontend web framework used to build the site
- [HackerNews/API](https://github.com/HackerNews/API) - Source of data
- [Bulma](https://bulma.io) (Specifically [Buefy](https://buefy.org)) - the CSS framework I've used

This app is far from an ideal architecture - it is currently all client-side rendered and re-pulls all data on page change.
In the future I may add [vuex](https://vuex.vuejs.org/) so it doesn't query the API every single page change.

Ideally you would use server-side rendering like [this example](https://github.com/vuejs/vue-hackernews-2.0) does (in fact, that app is all around better).
But to make testing certain tools easier, being strictly client-side rendered is preferable.

## Deployment requirements

You need to set the `VUE_APP_ROLLOUT_KEY` environment variable to your CloudBees SDK key.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).



<!-- Test commit to verify linkage resolution - Wed Oct 22 12:55:08 CEST 2025 -->



Run #10: Final event emission test after historical analysis

Testing after confirming:
- Last event was 08:55:01 UTC (No linked applications found)
- Events stopped 2.7 hours ago
- Database linkage is correct
- Auto-creation code working (verified with component 09314ed6)

This push verifies whether asset-scan 404 issue is resolved.
Run #11: Race condition verification after id_mapping failure investigation

Testing after confirming:
- 200+ workflows affected by id_mapping race condition (Oct 22, 11:00-16:00 UTC)
- Run #10 (11:44 UTC) hit during peak failure period (183 failures at 11:00 UTC)
- Events permanently dropped by run-service after 7 NACK retries
- Database linkage verified correct in Postgres
- Auto-creation working for other components (09314ed6)

This push verifies whether PreProd run-service race condition is resolved.

<!-- Test commit - Wed Oct 22 13:59:29 UTC 2025 -->
