---
id: introduction
hide_title: true
sidebar_label: Introduction
image: https://gbox-proxy.github.io/img/gbox-full.png
slug: /
---
<h1 align="center"><img width="220px" src="/img/gbox-full.png" /></h1>

Fast reverse proxy in front of any GraphQL server for caching, securing and monitoring.

Features
--------

+ :floppy_disk: Caching
    + [RFC7234](https://httpwg.org/specs/rfc7234.html) compliant HTTP Cache.
    + Cache query operations results through types.
    + Auto invalidate cache through mutation operations.
    + [Swr](https://web.dev/stale-while-revalidate/) query results in background.
    + Cache query results to specific headers, cookies (varies).
+ :closed_lock_with_key: Securing
    + Disable introspection.
    + Limit operations depth, nodes and complexity.
+ :chart_with_upwards_trend: Monitoring ([Prometheus](https://prometheus.io/) metrics)
    + Operations in flight.
    + Operations count.
    + Operations request durations.
    + Operations caching statuses.

How it works
------------

Every single request sent by your clients will serve by GBox. The GBox reverse proxy will cache, validate, and collect metrics before pass through requests to your GraphQL server.

![Diagram](/img/diagram.png)

