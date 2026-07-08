# Phase E-7 — Final SEO QA Pass

This checklist is the final review layer for Phase E. It does not replace Google Search Console, Rich Results Test, Lighthouse, or real social-preview testing. It gives UCAISM.org a stable QA routine before and after each production push.

## 1. Crawlability

Confirm that these URLs open after deployment:

- `https://ucaism.org/robots.txt`
- `https://ucaism.org/sitemap.xml`

Review `sitemap.xml` and confirm that the homepage and Phase D platform pages are included:

- Research Library
- Foundation Papers
- Policy Briefs
- Working Papers
- Media Kit
- Citation Center
- News & Insights
- Newsletter
- Events
- Global Community

## 2. Core SEO metadata

For each major public page, check:

- Unique `<title>`
- Clear meta description
- Canonical URL
- Consistent author metadata
- No accidental `noindex` directive

## 3. Schema.org structured data

Representative pages should include JSON-LD appropriate to their role:

- Homepage: `WebSite`, `ResearchOrganization`, `Person`
- Book pages: `Book`
- Research hubs: `CollectionPage` or `WebPage`
- Events page: `Event` placeholders when real events are published

Use Google Rich Results Test and Schema.org Validator for public URLs after deployment.

## 4. Open Graph and Twitter Cards

Check representative pages in social preview tools:

- Homepage
- Research Library
- Foundation Papers
- Policy Briefs
- Media Kit
- News & Insights

Confirm:

- Title is not truncated awkwardly
- Description is clear and institutional
- Image loads publicly
- URL is canonical

## 5. Multilingual foundation

Confirm that these pages open:

- `https://ucaism.org/ko/`
- `https://ucaism.org/ja/`
- `https://ucaism.org/es/`

Before expanding more languages, keep translation quality controlled and avoid machine-style literal translation.

## 6. Performance review

Run Lighthouse on:

- Homepage
- Research Library
- Policy Briefs
- News & Insights
- Global Community

Targets:

- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 7. Search Console and analytics readiness

After deployment:

1. Verify domain or URL-prefix property in Google Search Console.
2. Submit `https://ucaism.org/sitemap.xml`.
3. Confirm that Google can fetch `robots.txt`.
4. Add analytics only after choosing a privacy policy and measurement approach.

## 8. Final editorial QA

Before public promotion, confirm:

- UCAISM Global Initiative naming is consistent.
- Chang-Gyu Kwag author name is consistent.
- Open Wins title is consistent.
- Intelligent Capitalism is described as forthcoming unless publication status changes.
- All public pages preserve institutional tone.
