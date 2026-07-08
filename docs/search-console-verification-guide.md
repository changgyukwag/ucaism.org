# Phase E-6 — Search Console / Webmaster Tools Verification Guide

This guide prepares UCAISM.org for search-engine ownership verification and indexing review without adding a specific private verification token to the public repository.

## 1. Google Search Console

Recommended property type:

- Use **URL-prefix property** first: `https://ucaism.org/`
- After DNS access is available, optionally add a **Domain property** for `ucaism.org`.

Recommended verification methods for GitHub Pages:

1. **HTML meta tag**
   - Copy the Google verification meta tag.
   - Add it inside the `<head>` of the homepage.
   - Example placeholder:

```html
<meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_VERIFICATION_CODE">
```

2. **HTML file upload**
   - Google may provide a file such as `google1234567890abcdef.html`.
   - Place the file at the repository root.
   - Commit and push.
   - Confirm that it is accessible at `https://ucaism.org/google1234567890abcdef.html`.

After verification:

- Submit `https://ucaism.org/sitemap.xml`.
- Inspect the homepage URL.
- Inspect high-priority pages such as `/research-library/`, `/foundation-papers/`, `/policy-briefs/`, and `/working-papers/`.

## 2. Bing Webmaster Tools

Recommended verification methods:

1. Import from Google Search Console after Google verification is complete.
2. Or add a Bing meta tag:

```html
<meta name="msvalidate.01" content="REPLACE_WITH_BING_VERIFICATION_CODE">
```

After verification:

- Submit `https://ucaism.org/sitemap.xml`.
- Check crawl errors and indexing status.

## 3. Naver Search Advisor / regional search readiness

For Korean-language expansion, Naver verification may be useful later.

```html
<meta name="naver-site-verification" content="REPLACE_WITH_NAVER_VERIFICATION_CODE">
```

## 4. Required live URLs to confirm

- `https://ucaism.org/robots.txt`
- `https://ucaism.org/sitemap.xml`
- `https://ucaism.org/`
- `https://ucaism.org/research-library/`
- `https://ucaism.org/ko/`

## 5. Governance note

Do not commit private analytics credentials or admin-only dashboard links. Public verification tokens are acceptable only when generated specifically for site ownership verification.
