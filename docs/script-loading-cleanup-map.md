# Script Loading Cleanup Map

Use this map to decide which JavaScript files should be loaded on which pages.

## Public page scripts

| Page | Recommended script | Load rule |
|---|---|---|
| Research Library | `assets/js/research-library.js` | Only on `/research-library/` |
| Foundation Papers | `assets/js/foundation-papers.js` | Only on `/foundation-papers/` |
| Policy Briefs | `assets/js/policy-briefs.js` | Only on `/policy-briefs/` |
| Working Papers | `assets/js/working-papers.js` | Only on `/working-papers/` |
| Media Kit | `assets/js/media-kit.js` | Only on `/media-kit/` if interactive features are enabled |
| Citation Center | `assets/js/citation-center.js` | Only on `/citation-center/` |
| News & Insights | `assets/js/news-insights.js` | Only on `/news-insights/` |
| Newsletter | `assets/js/newsletter.js` | Only on `/newsletter/` |
| Events | `assets/js/events.js` | Only on `/events/` |
| Global Community | `assets/js/global-community.js` | Only on `/global-community/` |
| Multilingual pages | `assets/js/language-switcher.js` | Only where the language switcher appears |
| Consolidated navigation | `assets/js/navigation-menu.js` | Only after the consolidated header is applied |

## QA-only scripts

The following scripts should generally not be loaded on public pages by default. Use them manually in local testing or temporarily during QA.

- `assets/js/seo-health-check.js`
- `assets/js/schema-health-check.js`
- `assets/js/social-card-health-check.js`
- `assets/js/performance-health-check.js`
- `assets/js/analytics-health-check.js`
- `assets/js/final-seo-qa-check.js`
- `assets/js/site-integration-health-check.js`
- `assets/js/head-metadata-health-check.js`
- `assets/js/priority-head-health-check.js`
- `assets/js/lightweight-performance-audit.js`

## Recommended loading pattern

```html
<script src="/assets/js/policy-briefs.js" defer></script>
```

Use `defer` unless a script must run before page rendering, which should be rare for UCAISM.org.
