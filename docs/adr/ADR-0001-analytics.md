# ADR-0001: Analytics Implementation with User Opt-Out

## Status

**Accepted** - 09.02.2026

## Context

The website needs analytics to understand visitor behavior
and improve user experience.
Requirements include gathering basic usage metrics while respecting user privacy,
complying with privacy regulations,
and maintaining a simple implementation on a static Astro site.

## Decision

Implement Cloudflare Web Analytics with user opt-out controls. This includes:

<!-- markdownlint-disable -->
- **Largest Contentful Paint (LCP)**: Measures the render time of the largest image or text block visible within the viewport.
- **Interaction to Next Paint (INP)**: Measures a page's overall responsiveness to user interactions by observing the latency of all click, tap, and keyboard interactions.
- **Cumulative Layout Shift (CLS)**: Measures the largest burst of layout shift scores for every unexpected shift that occurs during the lifespan of a page.
- **Page Load Time**: Measures the time it takes for the page to fully load. (e.g., 100ms)
- **Page Views**: Tracks the number of times a page is viewed. (e.g., 1000 views)
- **Referrer**: Identifies the source that referred the visitor to the site. (e.g., Google, Twitter)
- **Host**: Identifies the domain from which the visitor accessed the site. (e.g., example.com)
- **Country**: Identifies the country of the visitor. (e.g., Turkey)
- **Path**: Identifies the specific page or path visited by the visitor. (e.g., /about/, /blog/)
- **Browser**: Identifies the browser used by the visitor. (e.g., Chrome, Firefox, Safari)
- **Operating System**: Identifies the operating system used by the visitor. (e.g., Windows, macOS, Linux)
- **Device Type**: Identifies the type of device used by the visitor. (e.g., Desktop, Mobile, Tablet)
<!-- markdownlint-enable -->

Users can opt out of analytics tracking via a toggle in the footer,
which sets a flag in local storage to prevent analytics scripts from running.
