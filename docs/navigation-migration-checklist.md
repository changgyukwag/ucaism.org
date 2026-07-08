# Phase F-2 — Navigation Consolidation Guide

## Goal

The site now has enough content to feel like a global research platform. The top navigation should therefore become simpler, not larger. The recommended top-level structure is:

```text
Home / Research / Books / Insights / Media / Community
```

Contact should remain visible inside Community and may also appear in the footer.

## Recommended grouping

### Research

Use this group for research and citation infrastructure:

- Research Library
- Foundation Papers
- Policy Briefs
- Working Papers
- Citation Center

### Books

Use this group for book-facing pages:

- Books Center
- Open Wins
- Intelligent Capitalism
- Downloads

### Insights

Use this group for timely content:

- News & Insights
- Newsletter
- Events

### Media

Use this group for press-facing materials:

- Media Kit
- Media Center

### Community

Use this group for engagement:

- Global Community
- Contact

## Migration steps

1. Confirm that all current Phase D and Phase E pages are pushed and live.
2. Open the current site header file or each page header section.
3. Add `/assets/css/phase-f-navigation.css` to the page `<head>`.
4. Replace only the navigation block, not the whole page.
5. Add `/assets/js/navigation-menu.js` before `</body>` with `defer`.
6. Test desktop dropdowns.
7. Test mobile menu.
8. Check that every dropdown link opens the correct URL.
9. Commit only after the live preview or local browser check is stable.

## Important caution

Do not apply this snippet blindly if the current site uses a different global header structure. In that case, use the grouping logic and copy only the menu items into the existing header.
