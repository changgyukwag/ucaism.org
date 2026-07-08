# Phase F-4 — Priority Page Head Integration Guide

## Purpose

Phase F-4 turns the Phase E/F metadata foundation into a practical page-by-page integration workflow. The goal is to apply metadata to the most important pages first without breaking existing content or duplicating tags.

## Priority order

1. Homepage: `/`
2. Research Library: `/research-library/`
3. Foundation Papers: `/foundation-papers/`
4. Policy Briefs: `/policy-briefs/`
5. Working Papers: `/working-papers/`
6. Books Center: `/books/`
7. Media Kit: `/media-kit/`
8. Citation Center: `/citation-center/`
9. News & Insights: `/news-insights/`
10. Newsletter: `/newsletter/`
11. Events: `/events/`
12. Global Community: `/global-community/`
13. Multilingual foundation pages: `/ko/`, `/ja/`, `/es/`

## Integration rule

For each HTML page, the `<head>` should contain only one of each core metadata type:

- one `<title>`
- one meta description
- one canonical URL
- one robots directive
- one Open Graph title, description, type, URL, image, and site name
- one Twitter card block
- one page-level JSON-LD script

## Safe editing sequence

1. Open the target HTML page.
2. Locate the existing `<head>` block.
3. Keep essential stylesheet and script references.
4. Replace or add only metadata tags.
5. Do not delete layout, CSS, JS, or favicon links unless clearly duplicated.
6. Save using LF line endings.
7. Test the page in a browser.
8. Run `assets/js/priority-head-health-check.js` from the browser console if needed.

## Avoid

- Duplicate canonical URLs.
- Schema.org JSON-LD that describes the wrong page type.
- Social image URLs using relative paths in OG/Twitter tags.
- Copying homepage metadata into every page.
- Adding hreflang to pages that do not yet have real equivalents.
