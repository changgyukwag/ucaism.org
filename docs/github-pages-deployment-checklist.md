# GitHub Pages Deployment Checklist

## Before push

- [ ] Repository is the correct `ucaism.org` repository.
- [ ] Files were copied into the repository root.
- [ ] No accidental nested folder such as `ucaism_phase_*` was committed unless intentionally kept as documentation.
- [ ] `.gitattributes` is present at root.
- [ ] Commit Summary and Description match the phase.

## After push

- [ ] GitHub Desktop shows no unpushed commits.
- [ ] GitHub repository shows the latest commit.
- [ ] GitHub Pages deployment completes successfully.
- [ ] Public URL loads in an incognito/private browser window.
- [ ] Hard refresh clears cached CSS if a layout appears stale.

## If a page does not load

1. Confirm the folder name matches the URL exactly.
2. Confirm the folder contains `index.html`.
3. Confirm there is no capitalization mismatch.
4. Confirm the file was pushed to the branch used by GitHub Pages.
5. Wait a few minutes and reload.
