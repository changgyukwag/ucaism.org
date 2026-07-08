# Priority Head Integration Checklist

Use this checklist after editing each priority page.

## Required

- [ ] Page has one clear `<title>`.
- [ ] Page has one meta description under roughly 160 characters where possible.
- [ ] Page has one canonical URL matching the deployed page.
- [ ] Page has `meta name="robots" content="index, follow"` unless there is a reason not to index.
- [ ] Open Graph metadata uses absolute `https://ucaism.org/...` URLs.
- [ ] Twitter Card metadata is present.
- [ ] JSON-LD describes the actual page type.
- [ ] No duplicate metadata blocks remain.
- [ ] Page still loads existing CSS and JS.
- [ ] GitHub Desktop shows no CRLF warning.

## Recommended external checks after Push

- Google Rich Results Test for JSON-LD validity.
- Facebook Sharing Debugger or LinkedIn Post Inspector for Open Graph preview.
- X/Twitter Card Validator equivalent preview tools where available.
- Lighthouse SEO check.
- Manual mobile preview.
