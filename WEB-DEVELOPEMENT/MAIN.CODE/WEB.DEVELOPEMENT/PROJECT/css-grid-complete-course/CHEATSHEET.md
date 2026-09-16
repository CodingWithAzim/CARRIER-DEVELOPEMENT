# CSS Grid Cheat Sheet

## Container
```css
.container {
  display: grid;
}
```

## Columns / rows
```css
grid-template-columns: 1fr 2fr;
grid-template-rows: 100px auto;
```

## Repeat
```css
grid-template-columns: repeat(3, 1fr);
```

## Responsive
```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

## Gap
```css
gap: 20px;
row-gap: 10px;
column-gap: 30px;
```

## Item placement
```css
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

```css
.item {
  grid-column: span 2;
}
```

## Named area
```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

```css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Alignment
```css
justify-items: center;
align-items: center;
place-items: center;

justify-content: center;
align-content: center;
place-content: center;

justify-self: center;
align-self: center;
place-self: center;
```

## Auto placement
```css
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
```

## Implicit tracks
```css
grid-auto-columns: 120px;
grid-auto-rows: 100px;
```

## Functions
```css
repeat(4, 1fr)
minmax(180px, 1fr)
min-content
max-content
fit-content(300px)
```

## Important difference
- `1fr`: share remaining space.
- `%`: percentage of the grid container.
- `auto`: size based on content / available space rules.
- `minmax(min, max)`: sets a lower and upper bound.
- `auto-fit`: fits as many tracks as possible and collapses empty ones.
- `auto-fill`: keeps the possible track slots even when empty.

## Mental model
```text
Grid container
├── Grid lines
├── Grid tracks
│   ├── column tracks
│   └── row tracks
├── Grid cells
├── Grid areas
└── Grid items
```
