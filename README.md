# UCAISM.org — Phase E-2 Schema.org Structured Data

This package adds a structured-data layer for UCAISM.org. It is designed for a static GitHub Pages site and does not require a backend.

## What this phase adds

- Institutional Schema.org identity for UCAISM Global Initiative
- Author Schema.org identity for Chang-Gyu Kwag
- WebSite schema with a search action target
- Book schema for *Open Wins: The New Enlightenment*
- Page-level JSON-LD for Research Library, Foundation Papers, Policy Briefs, Working Papers, Media Kit, Citation Center, News & Insights, Newsletter, Events, and Global Community
- A structured schema data file for future automation
- Optional local schema health-check script

## Installation

1. Copy the files and folders in this package into the root of the existing `ucaism.org` repository.
2. Keep `.gitattributes` in the root directory.
3. Use `docs/schema-jsonld-snippets.html` or `docs/schema-jsonld-snippets.md` to add page-specific JSON-LD blocks into the `<head>` of each corresponding HTML page.
4. Do not add every internal-page schema block to every page. Use only the relevant block for the page being edited.
5. Commit and push through GitHub Desktop.

## Recommended application order

1. Add the Organization, Person, WebSite, and Book blocks to the home page.
2. Add the matching page-specific block to each Phase D page.
3. Test published pages with a rich-results or schema validation tool.

## Notes

This phase prepares the site for Phase E-3 Open Graph & Twitter Cards. Schema.org helps search engines understand the institutional and publication structure of the website; Open Graph and Twitter Cards help shared links look professional on social platforms.
