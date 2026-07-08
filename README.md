# UCAISM.org — Phase D-1 Research Library

This package adds the first Phase D research-platform module to UCAISM.org.

## Files included

- `research-library/index.html` — new Research Library page
- `assets/css/phase-d-research.css` — additive stylesheet for Phase D research-platform components
- `assets/js/research-library.js` — static search and filter behavior
- `data/research-library.json` — reusable catalog data seed
- `docs/navigation-integration-snippet.html` — optional nav link snippet
- `COMMIT_MESSAGE.md` — GitHub Desktop commit summary and description

## Installation

1. Unzip this package.
2. Copy the folders into the root of the existing UCAISM.org GitHub Pages repository.
3. Do not delete or overwrite existing files unless GitHub Desktop clearly shows this package is adding the intended files only.
4. If the current site navigation has a Research or Publications menu, add the link from `docs/navigation-integration-snippet.html`.
5. Open `research-library/index.html` locally or through the GitHub Pages preview URL after pushing.

## Design note

The stylesheet is intentionally additive. It does not replace the existing global CSS, so it should not break existing pages.
