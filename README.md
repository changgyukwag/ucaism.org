# Intelligent Capitalism Cover Replacement

This package replaces the website cover image for **Intelligent Capitalism** with the attached revised cover.

## Files

- `assets/images/books/intelligent-capitalism-cover.png`
- `assets/images/books/intelligent-capitalism-cover.webp`
- `assets/images/books/intelligent-capitalism-cover-thumb.webp`
- `data/intelligent-capitalism-cover.json`
- `docs/intelligent-capitalism-cover-html-snippet.html`

## Recommended integration

1. Copy the package contents into the root of the `ucaism.org` repository.
2. In the page where **Intelligent Capitalism** appears, find the current cover image.
3. Replace the old image path with:

```html
/assets/images/books/intelligent-capitalism-cover.webp
```

or use the full `<picture>` snippet in:

```text
docs/intelligent-capitalism-cover-html-snippet.html
```

## Alt text

Use:

```text
Cover of Intelligent Capitalism by Chang-Gyu Kwag
```

## Notes

- The PNG file preserves the uploaded cover.
- The WebP file is recommended for faster loading.
- The thumbnail WebP can be used for cards, grids, and mobile previews.
