# Advanced Grid

## Implicit grid
When there are more items than explicit tracks, Grid creates implicit tracks.

Control them with:
```css
grid-auto-rows: 100px;
grid-auto-columns: 150px;
grid-auto-flow: row;
```

## Dense auto-placement
`grid-auto-flow: dense` can pack items into earlier gaps. Be careful: visual reordering should not contradict meaningful DOM order.

## Nested grids
A grid item can itself become a grid container.

## Subgrid
`subgrid` lets a nested grid participate in the parent grid's track sizing.

Example:
```css
.card {
  display:grid;
  grid-template-rows:subgrid;
  grid-row:span 3;
}
```

Use it when repeated components need internal alignment across siblings.

## Accessibility
CSS Grid changes visual placement, not the semantic reading order of your HTML. Keep DOM order logical. Avoid using placement to create a confusing reading sequence.

## Masonry
The CSS Grid Level 3 masonry direction is not the same thing as the classic Grid Level 1 two-dimensional track model. Browser support and implementation status can change, so verify support before using masonry in production.
