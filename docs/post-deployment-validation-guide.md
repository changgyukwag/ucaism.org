# Post-Deployment Validation Guide

Use this guide after each GitHub Desktop Commit → Push cycle.

## Immediate checks

Open these URLs in a browser:

```text
https://ucaism.org/
https://ucaism.org/robots.txt
https://ucaism.org/sitemap.xml
https://ucaism.org/research-library/
https://ucaism.org/foundation-papers/
https://ucaism.org/policy-briefs/
https://ucaism.org/working-papers/
https://ucaism.org/media-kit/
https://ucaism.org/citation-center/
https://ucaism.org/news-insights/
https://ucaism.org/newsletter/
https://ucaism.org/events/
https://ucaism.org/global-community/
https://ucaism.org/ko/
https://ucaism.org/ja/
https://ucaism.org/es/
```

## Browser console QA

Optional helper scripts are available in `assets/js/`:

- `seo-health-check.js`
- `schema-health-check.js`
- `social-card-health-check.js`
- `performance-health-check.js`
- `analytics-health-check.js`
- `final-seo-qa-check.js`

These scripts are for local QA. They do not need to be loaded globally on every public page.

## External validation tools

Use these after deployment:

- Google Search Console URL Inspection
- Google Rich Results Test
- Schema.org Validator
- Lighthouse in Chrome DevTools
- Facebook Sharing Debugger
- LinkedIn Post Inspector
- X/Twitter Card Validator, when available

## Release note

Phase E completes the optimization foundation. The site is now prepared for search visibility, structured interpretation, social sharing, multilingual expansion, and post-deployment measurement.
