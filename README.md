# UCAISM.org — Phase D-3: Policy Briefs + LF Normalization

This package adds the Phase D-3 Policy Briefs hub to UCAISM.org and adds a repository-level `.gitattributes` file to keep web source files normalized to LF line endings.

## Included files

- `.gitattributes`
- `policy-briefs/index.html`
- `assets/css/phase-d-research.css`
- `assets/js/policy-briefs.js`
- `data/policy-briefs.json`
- `docs/navigation-integration-snippet.html`
- `COMMIT_MESSAGE.md`

## Installation

1. Download and unzip this package.
2. Copy the contents of `ucaism_phase_d3_policy_briefs_LF_Normalized` into the root of the existing `ucaism.org` GitHub Pages repository.
3. Allow files with the same names to be overwritten.
4. Confirm that `.gitattributes` is placed at the repository root, not inside another folder.
5. In GitHub Desktop, confirm the changed files and check that the previous LF-to-CRLF warning is gone or reduced.
6. Commit with the summary and description in `COMMIT_MESSAGE.md`.
7. Push to GitHub.
8. After deployment, check `https://ucaism.org/policy-briefs/`.

## Commit Summary

Add Phase D-3 Policy Briefs and normalize line endings

## Note

If GitHub Desktop still shows a line-ending warning for a file that was already converted locally, open the file in VS Code, change the lower-right line ending indicator from `CRLF` to `LF`, save, and refresh GitHub Desktop. The `.gitattributes` file will prevent the same issue from repeating in future commits.
