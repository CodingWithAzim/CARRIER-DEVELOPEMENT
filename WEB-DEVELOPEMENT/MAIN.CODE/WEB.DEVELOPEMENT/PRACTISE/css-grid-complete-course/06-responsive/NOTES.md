# Responsive Grid

Preferred first pattern:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

This often removes the need for many media queries.

For larger page structures, combine named areas with media queries.

Good practice:
- Avoid horizontal scrolling.
- Let content define sensible minimum widths.
- Test at narrow mobile widths.
- Do not use Grid simply because it exists; use Flexbox when the problem is one-dimensional.
