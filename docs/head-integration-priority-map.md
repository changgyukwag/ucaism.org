# Head Metadata Integration Priority Map

Phase E created SEO, Schema.org, Open Graph, Twitter Card, and hreflang foundations. These should be integrated gradually, not all at once.

## Priority 1 — Highest value pages

Apply complete metadata first to:

1. `/` — Homepage
2. `/research-library/`
3. `/foundation-papers/`
4. `/policy-briefs/`
5. `/working-papers/`
6. `/media-kit/`
7. `/citation-center/`

## Priority 2 — Engagement pages

Apply after Priority 1 is stable:

1. `/news-insights/`
2. `/newsletter/`
3. `/events/`
4. `/global-community/`
5. `/contact/`

## Priority 3 — Multilingual pages

Apply after language pages are reviewed by humans:

1. `/ko/`
2. `/ja/`
3. `/es/`

## Metadata checklist per page

Each public HTML page should eventually include:

- Unique `<title>`
- Unique meta description
- Canonical URL
- Robots directive
- Open Graph title, description, URL, type, image
- Twitter Card title, description, image
- JSON-LD where appropriate
- Hreflang only when translated alternatives exist

## Safety rules

- Do not duplicate canonical tags.
- Do not place multiple conflicting Open Graph images on the same page.
- Do not use translated hreflang links for pages that are not true translated equivalents.
- Do not add analytics scripts until the privacy policy and tool choice are confirmed.
