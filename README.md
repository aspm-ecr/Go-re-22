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


Run #12: Immediate retry after Run #11 did not trigger

Testing at 14:11:35 UTC:
- Run #11 pushed 13:59 UTC - no workflow triggered after 10+ minutes
- Race condition stabilized (no id_mapping failures in 15+ min window)
- Verifying if webhook/DSL engine issue or systemic problem

<!-- Immediate retry - Wed Oct 22 14:11:35 UTC 2025 -->

Run #13: Post-investigation push after race condition analysis

Testing at $(date -u +"%Y-%m-%d %H:%M:%S") UTC:
- Run #11 and #12 did not trigger workflows (pushed 13:59 and 14:11 UTC)
- Race condition stabilized (no id_mapping errors since 14:00 UTC)
- 200+ workflows lost events during 11:00-16:00 UTC window
- Verifying if webhook/DSL engine recovered

<!-- Test commit - $(date -u) -->

Run #14: Continued verification after Run #13

Testing at $(date -u +"%H:%M:%S") UTC:
- Run #13 pushed at 14:24 UTC - no workflow triggered
- Runs #10, #11, #12, #13 all failed to start workflows
- PreProd infrastructure instability persists
- Verifying webhook/DSL engine operational status

<!-- Test commit - $(date -u +"%Y-%m-%d %H:%M:%S") UTC -->



Run #16: Post-race-condition-analysis push (Oct 23)

Testing after confirming Run #14 and #15 both hit the same race condition:
- Both workflows completed successfully in CloudBees UI
- Both hit run-service id_mapping race (NACK after 20 retries)
- Events permanently dropped from NATS
- No asset-service logs (zero events received)
- PR #764 awaiting merge to fix the race

This push verifies current PreProd status.

<!-- Test commit - $(date -u +"%Y-%m-%d %H:%M:%S") UTC -->
\nTrigger workflow run #16 - verify automation status mapping 2025-10-24T05:24:16Z

Update notes for CBP-22347 validation
