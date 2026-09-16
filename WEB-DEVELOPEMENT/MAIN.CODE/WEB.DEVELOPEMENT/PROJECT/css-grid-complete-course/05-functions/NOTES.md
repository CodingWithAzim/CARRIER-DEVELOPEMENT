# Functions

## `repeat()`
Reduce repeated track definitions.

## `minmax()`
Create a bounded track:
```css
minmax(200px, 1fr)
```

## `auto-fit`
Fits available tracks and collapses empty tracks, allowing populated tracks to expand.

## `auto-fill`
Fills the container with as many tracks as possible; empty track slots can remain.

## Intrinsic sizing
- `min-content`: smallest size the content can take without avoidable overflow.
- `max-content`: ideal size based on content without wrapping where possible.
- `fit-content(300px)`: behaves like an intrinsic maximum with a supplied limit.

These are easiest to understand by resizing the examples and watching the tracks.
