# Phase E-5 Performance Optimization Guide

This phase prepares UCAISM.org for faster loading, better search performance, and more stable sharing across global audiences while preserving GitHub Pages compatibility.

## Core rules

1. Keep the site static and dependency-light.
2. Load page-specific JavaScript with `defer`.
3. Add `loading="lazy"` to below-the-fold images.
4. Add explicit `width` and `height` attributes to images where practical.
5. Avoid layout shifts by reserving image and card space.
6. Keep CSS additive during Phase E; do not remove existing rules until a dedicated consolidation pass.
7. Avoid heavy third-party embeds on core research pages.
8. Use SVG for simple diagrams and social cards where possible.

## Image guidance

For below-fold images:

```html
<img src="/assets/images/example.webp" alt="Descriptive alt text" width="1200" height="630" loading="lazy" decoding="async">
```

For critical hero images, avoid lazy loading and keep dimensions explicit.

## JavaScript guidance

```html
<script src="/assets/js/page-script.js" defer></script>
```

Avoid blocking scripts in the `<head>` unless absolutely required.

## CSS guidance

Use the existing design system first. Add Phase-specific files only when needed. Later, run a consolidation pass to remove duplication after Phase E is complete.

## Testing workflow

1. Open the page locally or after GitHub Pages deployment.
2. Run Lighthouse in Chrome DevTools.
3. Check Performance, SEO, Accessibility, and Best Practices.
4. Paste or temporarily enable `assets/js/performance-health-check.js` for quick metadata and asset checks.
5. Fix high-impact issues first: missing image dimensions, blocking scripts, oversized images, duplicate CSS, and missing alt text.
