# CSS Cleanup Notes

Phase D/E/F expanded UCAISM.org rapidly. CSS should now be governed carefully.

## Current principle

- Do not delete working CSS casually.
- Do not combine everything into one large file without testing.
- Prefer additive cleanup and documentation before aggressive refactoring.

## Safe cleanup path

1. Identify duplicate components: cards, badges, grids, hero sections, buttons.
2. Keep the most stable rule set.
3. Move experimental or page-specific rules into page-specific sections.
4. Avoid loading unused CSS on minimal pages when feasible.
5. Test homepage, Research Library, Policy Briefs, Working Papers, and mobile menu after any CSS cleanup.

## Do not do yet

- Do not minify manually inside the working source files.
- Do not remove comments that explain Phase D/E/F maintenance.
- Do not introduce a build pipeline unless the site grows beyond simple GitHub Pages maintenance.
