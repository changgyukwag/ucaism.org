# Intelligent Capitalism Cover — Force Replacement Guide

The previous package added the new image, but the live page can still show the old cover when the existing HTML continues to reference the old image path.

## Step 1 — Copy this package

Copy all files from this folder into the root of the `ucaism.org` repository. Allow overwrite when prompted.

This package places the revised cover under several common asset paths, including:

- `assets/images/books/intelligent-capitalism-cover.webp`
- `assets/images/books/intelligent-capitalism-cover.png`
- `assets/images/books/intelligent-capitalism.webp`
- `assets/images/covers/intelligent-capitalism-cover.webp`
- `assets/images/intelligent-capitalism-cover.webp`

## Step 2 — Find the existing HTML reference

In VS Code, open the repository and search all files for:

```text
Intelligent Capitalism
```

Then search for likely old cover paths:

```text
cover
book
coming soon
intelligent
capitalism
```

The file is most likely one of these:

- `index.html`
- `books/index.html`
- `research/index.html`
- another page containing the Featured Book or Intelligent Capitalism card

## Step 3 — Replace the old img path

Find the existing `<img ...>` for the Intelligent Capitalism cover and replace the `src` value with:

```html
/assets/images/books/intelligent-capitalism-cover.webp
```

Or replace the entire image block with the snippet in:

```text
docs/intelligent-capitalism-cover-direct-replacement-snippet.html
```

## Step 4 — Commit and push

Suggested commit summary:

```text
Force replace Intelligent Capitalism cover image
```

## Step 5 — Clear cache

After GitHub Pages deploys, open the page with a cache bypass:

- Windows Chrome: `Ctrl + F5`
- Or open the URL in an incognito/private window

If the old cover still appears, the page is still referencing a different image path. Repeat Step 2 and replace that exact `src` path.
