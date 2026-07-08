# UCAISM.org — Phase E-1 SEO Foundation

This package adds the first Phase E optimization layer for UCAISM.org.

## What it adds

- `robots.txt`
- `sitemap.xml`
- `.gitattributes` LF normalization preservation
- `data/seo-pages.json` page-level SEO metadata map
- `docs/phase-e-seo-head-snippets.html` reusable SEO head snippet
- `docs/page-seo-map.md` editorial SEO guide
- `assets/js/seo-health-check.js` optional local metadata checker

## Installation

1. Copy all files and folders into the root of the existing `ucaism.org` GitHub Pages repository.
2. Overwrite `.gitattributes` only if the current file matches the Phase D version.
3. Do not delete existing pages.
4. Commit and push through GitHub Desktop.
5. After deployment, verify:
   - https://ucaism.org/robots.txt
   - https://ucaism.org/sitemap.xml

## Notes

This package does not automatically rewrite every existing HTML page. It adds the SEO infrastructure and canonical metadata plan. Phase E-2 will add structured data. Phase E-3 will add Open Graph and Twitter Card sharing templates.
