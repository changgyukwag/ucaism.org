# UCAISM.org — Phase F-4 Priority Page Head Integration

This package adds a controlled integration kit for applying SEO, Schema.org, Open Graph, Twitter Cards, and hreflang metadata to the highest-priority UCAISM.org pages.

## What this phase does

Phase F-4 does not overwrite existing HTML automatically. It provides production-ready `<head>` snippets and a priority integration checklist so the site can be updated safely page by page.

## Files included

- `docs/priority-page-head-integration-guide.md`
- `docs/priority-head-snippets.html`
- `docs/priority-head-integration-checklist.md`
- `docs/priority-head-page-map.md`
- `data/priority-head-metadata.json`
- `assets/js/priority-head-health-check.js`
- `.gitattributes`
- `COMMIT_MESSAGE.md`

## Recommended use

1. Copy this package into the repository root.
2. Open `docs/priority-head-snippets.html`.
3. Copy the appropriate snippet into the `<head>` of the matching page.
4. Remove any duplicate title, description, canonical, OG, Twitter, or JSON-LD tags.
5. Test the page locally and after GitHub Pages deployment.
6. Commit and push.
