# UCAISM.org Phase F — Integration & Cleanup Plan

Phase F shifts the project from expansion to stabilization. Phase D created the global research-platform architecture, and Phase E created the SEO, schema, social, multilingual, performance, and analytics foundations. Phase F should make those layers easier to maintain, lighter to navigate, and safer to deploy.

## Primary objective

Turn the expanded UCAISM.org site into a coherent, fast, maintainable, globally credible platform without adding unnecessary weight.

## Working principles

1. Do not add new public sections unless they solve a clear navigation or editorial problem.
2. Prefer consolidation over expansion.
3. Keep the GitHub Pages static-site structure.
4. Preserve the existing design system.
5. Avoid heavy external scripts unless they are necessary.
6. Apply SEO and social metadata first to the highest-value pages.
7. Treat every change as reversible and commit-ready.
8. Keep navigation simple for general readers and deep enough for researchers.

## Recommended Phase F sequence

### Phase F-1 — Integration & Cleanup Foundation
Create the stabilization plan, page inventory, navigation map, and local QA helper. This package is the current step.

### Phase F-2 — Navigation Consolidation
Organize expanded pages under a simpler top-level structure. Recommended top-level groups: Home, Research, Books, Insights, Media, Community, Contact.

### Phase F-3 — Head Metadata Integration Pass
Apply the Phase E metadata snippets to priority pages in a controlled order: homepage, Research Library, Foundation Papers, Policy Briefs, Working Papers, Media Kit, Citation Center, News & Insights.

### Phase F-4 — CSS/JS Cleanup Pass
Reduce duplication in Phase D CSS/JS, keep additive components, and avoid unnecessary page-level scripts.

### Phase F-5 — Content Density & Reader Flow Pass
Check whether pages feel too dense, too institutional, or too repetitive. Add concise “start here” pathways where needed.

### Phase F-6 — Mobile & Accessibility QA Pass
Check mobile layout, tap targets, heading order, color contrast, link clarity, and keyboard navigation.

### Phase F-7 — Final Lightweight Release
Create a final release package and checklist for long-term maintenance.

## Priority pages for stabilization

1. Homepage
2. Research Library
3. Foundation Papers
4. Policy Briefs
5. Working Papers
6. Books / Publications Center
7. Media Kit
8. Citation Center
9. News & Insights
10. Contact

## Output rule for future Phase F steps

Each future Phase F package should include:

- ZIP file
- Commit Summary
- Commit Description
- Upload method
- Clear rollback note when files overwrite existing files
