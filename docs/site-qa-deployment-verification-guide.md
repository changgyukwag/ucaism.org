# Phase F-6 — Site QA and Deployment Verification Guide

This guide provides a final deployment verification routine for UCAISM.org after the Phase D, E, and F expansion. The purpose is not to add more content, but to confirm that the expanded global research platform remains stable, navigable, lightweight, and credible.

## 1. Pre-commit checks

Before committing each update:

- Confirm that the ZIP contents were copied into the repository root, not into a nested duplicate folder.
- Confirm that existing production files were not accidentally deleted.
- Confirm that `.gitattributes` remains in the repository root.
- Confirm that GitHub Desktop does not show unexpected line-ending warnings.
- Review changed files and make sure documentation-only packages did not unintentionally overwrite live HTML pages.

## 2. Post-push checks

After pushing to GitHub:

- Wait for GitHub Pages deployment to finish.
- Visit the homepage.
- Visit each newly added Phase D page.
- Visit `robots.txt` and `sitemap.xml`.
- Test the site on desktop and mobile-width browser windows.
- Check that no key page returns 404.

## 3. Priority URL verification

Check these URLs first:

- https://ucaism.org/
- https://ucaism.org/research-library/
- https://ucaism.org/foundation-papers/
- https://ucaism.org/policy-briefs/
- https://ucaism.org/working-papers/
- https://ucaism.org/media-kit/
- https://ucaism.org/citation-center/
- https://ucaism.org/news-insights/
- https://ucaism.org/newsletter/
- https://ucaism.org/events/
- https://ucaism.org/global-community/
- https://ucaism.org/ko/
- https://ucaism.org/ja/
- https://ucaism.org/es/
- https://ucaism.org/robots.txt
- https://ucaism.org/sitemap.xml

## 4. Navigation verification

The top-level navigation should remain simple. Recommended public hierarchy:

- Home
- Research
- Books
- Insights
- Media
- Community
- Contact

The detailed Phase D pages should be discoverable, but not all of them need to appear as equal top-level menu items.

## 5. Metadata verification

For priority pages, confirm:

- One `<title>` tag.
- One meta description.
- One canonical URL.
- No conflicting robots meta tag.
- Open Graph title, description, URL, and image where applicable.
- Twitter Card metadata where applicable.
- JSON-LD syntax is valid when inserted.

## 6. Performance verification

Use Lighthouse or browser DevTools to confirm:

- No oversized images on the initial viewport.
- Public pages do not load QA-only scripts.
- JavaScript is page-specific and deferred where appropriate.
- CSS remains additive and does not create layout jumps.
- Mobile rendering is readable without horizontal scrolling.

## 7. Editorial credibility verification

The site should feel like an international research and public-education platform. Confirm:

- No placeholder language appears on core public pages unless intentional.
- “Coming soon” is used carefully and not overused.
- Chang-Gyu Kwag, UCAISM Global Initiative, Open Wins, and Intelligent Capitalism are consistently described.
- The site does not overclaim publication status, institutional affiliations, or media appearances.
