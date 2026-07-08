# Phase F-3 — Head Metadata Integration Pass

This guide defines a safe, page-by-page approach for integrating the metadata foundations created in Phase E into UCAISM.org HTML pages.

## Purpose

Phase E created the SEO, Schema.org, Open Graph, Twitter Card, and multilingual metadata foundations. Phase F-3 turns those foundations into a controlled integration workflow.

The goal is not to paste every snippet everywhere. The goal is to add the right metadata to the right pages while avoiding duplication, incorrect canonical URLs, or conflicting social previews.

## Recommended priority order

1. Homepage: `/`
2. Research Library: `/research-library/`
3. Books Center / Open Wins / Intelligent Capitalism pages
4. Foundation Papers: `/foundation-papers/`
5. Policy Briefs: `/policy-briefs/`
6. Working Papers: `/working-papers/`
7. News & Insights: `/news-insights/`
8. Media Kit: `/media-kit/`
9. Citation Center: `/citation-center/`
10. Newsletter, Events, Global Community
11. Multilingual pages: `/ko/`, `/ja/`, `/es/`

## Metadata blocks to apply

Each priority page should receive the following blocks in the `<head>` section:

- Primary SEO title and description
- Canonical URL
- Robots directive
- Open Graph metadata
- Twitter Card metadata
- Schema.org JSON-LD
- hreflang alternates, where multilingual equivalents exist

## Safe integration rule

Before adding metadata, search the existing page head for existing versions of these tags:

- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta property="og:`
- `<meta name="twitter:`
- `<script type="application/ld+json">`
- `<link rel="alternate" hreflang=`

Replace or consolidate existing tags instead of duplicating them.

## Minimal page-level integration pattern

Use one canonical URL per page, one primary title, one description, one Open Graph block, one Twitter Card block, and one JSON-LD block.

Do not insert multiple conflicting JSON-LD blocks unless they are intentionally complementary and valid together.

## After integration

After each page is updated:

1. Open the page locally or on GitHub Pages.
2. Run `assets/js/head-metadata-health-check.js` in the browser console if needed.
3. Confirm the page title, description, canonical URL, OG image, and JSON-LD are present.
4. Validate important pages with Google Rich Results Test and social preview tools.
