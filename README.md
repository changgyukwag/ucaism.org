# UCAISM.org — Phase E-3 Open Graph & Twitter Cards

This package adds the Open Graph and Twitter/X Card foundation for UCAISM.org.

## Files included

- `assets/images/social/ucaism-social-card.svg`
- `data/social-cards.json`
- `docs/open-graph-twitter-card-snippets.html`
- `docs/open-graph-twitter-card-snippets.md`
- `assets/js/social-card-health-check.js`
- `.gitattributes`
- `COMMIT_MESSAGE.md`

## Install

1. Copy the contents of this folder into the root of the existing `ucaism.org` GitHub Pages repository.
2. Overwrite files when prompted.
3. Do not delete existing HTML pages.
4. Commit and push with the commit message in `COMMIT_MESSAGE.md`.
5. Confirm that this file loads after deployment:

`https://ucaism.org/assets/images/social/ucaism-social-card.svg`

## Integration note

This phase provides snippets and metadata assets. The actual `<head>` insertion should be done carefully page by page using `docs/open-graph-twitter-card-snippets.html`.
