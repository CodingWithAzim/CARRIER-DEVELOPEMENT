# Grid Glossary

**Grid container** — element with `display:grid`.

**Grid item** — direct child of a grid container.

**Grid line** — boundary line around/between tracks.

**Grid track** — a row or column between two grid lines.

**Grid cell** — one intersection area of one row track and one column track.

**Grid area** — one or more adjacent grid cells.

**Explicit grid** — tracks declared with `grid-template-*`.

**Implicit grid** — tracks created automatically when needed.

**Track sizing function** — syntax such as `1fr`, `minmax()`, `min-content`, `max-content`, `fit-content()`.

**Placement** — deciding which grid lines or areas contain an item.

**Auto-placement** — browser's algorithm for placing items that have no explicit placement.

**Subgrid** — lets a nested grid use the parent grid's tracks.

## Core property families

Container:
- `display`
- `grid-template-columns`
- `grid-template-rows`
- `grid-template-areas`
- `grid-template`
- `grid-auto-columns`
- `grid-auto-rows`
- `grid-auto-flow`
- `grid`
- `gap`, `row-gap`, `column-gap`

Item:
- `grid-column-start`
- `grid-column-end`
- `grid-row-start`
- `grid-row-end`
- `grid-column`
- `grid-row`
- `grid-area`

Alignment:
- `justify-items`
- `align-items`
- `place-items`
- `justify-content`
- `align-content`
- `place-content`
- `justify-self`
- `align-self`
- `place-self`
