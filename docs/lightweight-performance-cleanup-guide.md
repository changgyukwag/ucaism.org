# Phase F-5 — Lightweight Performance Cleanup Guide

This phase keeps UCAISM.org lightweight after the Phase D and Phase E platform expansion. The goal is not to remove institutional depth, but to make sure the site remains fast, maintainable, and safe for GitHub Pages.

## Core principle

Add content deliberately. Load assets only when they are needed. Keep the homepage and top research pages fast, readable, and stable.

## Priority cleanup areas

### 1. CSS governance

- Keep the existing global design system as the base.
- Use Phase D / Phase E / Phase F styles as additive layers only where needed.
- Avoid duplicating identical card, hero, button, grid, and badge rules across multiple CSS files.
- For production pages, load only the CSS files used by that page.
- Keep experimental CSS in documentation or staging snippets until it is needed.

### 2. JavaScript governance

- Use `defer` for page scripts whenever possible.
- Avoid loading all Phase D/E/F checker scripts on public pages.
- Health-check scripts should remain optional QA tools, not default visitor-facing scripts.
- Keep filtering/search scripts page-specific, such as `policy-briefs.js` only on the Policy Briefs page.

### 3. Image optimization

- Use SVG for logos, icons, and simple social cards where appropriate.
- Use compressed WebP or optimized JPG/PNG for photographs and complex images.
- Add `width`, `height`, and `loading="lazy"` to non-critical images.
- Avoid uploading very large book-cover or diagram files when a smaller display version is enough.

### 4. Metadata discipline

- Do not insert duplicate `<title>`, `<meta name="description">`, canonical, Open Graph, or Twitter Card tags.
- Apply head integration first to priority pages, then to secondary pages.
- Validate page metadata after each manual integration pass.

### 5. Static-site discipline

- Keep GitHub Pages simple: HTML, CSS, JS, JSON, SVG, and optimized images.
- Avoid adding server-only code, package managers, build steps, or database-dependent features unless there is a clear need.
- Use documentation and structured JSON files for future expansion without making every page heavy now.

## Recommended immediate actions

1. Keep the homepage lean.
2. Keep the top navigation consolidated.
3. Load page-specific JS only on pages that use it.
4. Keep health-check scripts out of default public page loads.
5. Use Lighthouse or browser DevTools after major pushes.
6. Treat large images and duplicate metadata as the main risk areas.

## Performance target

For key pages, aim for:

- Clear first screen within 2 seconds on a normal connection.
- No broken layout shift caused by missing image dimensions.
- No unnecessary third-party scripts.
- No duplicate metadata.
- No console errors from missing JS selectors.

