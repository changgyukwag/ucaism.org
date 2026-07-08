# Image Optimization Checklist

Use this checklist before adding new images to UCAISM.org.

## Before upload

- Confirm that the image is necessary.
- Use SVG for logos, icons, diagrams, and simple social cards when possible.
- Use WebP or optimized JPG for photographs.
- Avoid uploading print-resolution images for web display.
- Keep filenames lowercase, descriptive, and hyphenated.

## HTML attributes

Every non-decorative image should have:

```html
<img src="/assets/images/example.webp" alt="Meaningful description" width="1200" height="630" loading="lazy">
```

Use `loading="eager"` only for the most important above-the-fold image.

## Social images

- Recommended Open Graph size: 1200 × 630.
- Use one default UCAISM social card unless a page truly needs its own image.
- Keep social images visually consistent with the UCAISM brand.

## Book covers and diagrams

- Use smaller web display versions for pages.
- Keep original high-resolution files outside public page loads unless needed for downloads.
- Do not place very large image files directly in hero sections.
