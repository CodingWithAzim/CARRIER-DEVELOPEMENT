# Placement

Grid lines are the boundaries between tracks.

For 4 columns there are 5 vertical grid lines.

```css
grid-column: 1 / 3;
grid-row: 2 / 4;
```

Negative values count from the end:

```css
grid-column: 1 / -1;
```

`span` counts tracks:

```css
grid-column: span 2;
```

`grid-template-areas` is often the cleanest way to express major page regions.
