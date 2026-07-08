# UCAISM — Intelligent Capitalism Cover Force Replacement

This package fixes the issue where the revised cover asset was uploaded but the live page still displayed the old cover.

It includes the revised cover under multiple likely asset paths and provides a direct HTML replacement snippet.

## Primary path

Use this in the live HTML:

```html
/assets/images/books/intelligent-capitalism-cover.webp
```

## Required action

If the old cover still appears after copying this package, update the existing HTML `<img src="...">` for the Intelligent Capitalism card or section. The browser cannot switch to the new cover unless the page points to the new image path or the old image file has been overwritten.
