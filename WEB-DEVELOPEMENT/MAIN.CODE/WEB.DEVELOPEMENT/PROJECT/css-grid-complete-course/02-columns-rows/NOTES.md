# Columns and Rows

`grid-template-columns` defines vertical tracks.
`grid-template-rows` defines horizontal tracks.

### `repeat()`
```css
repeat(3, 1fr)
repeat(4, minmax(180px, 1fr))
```

### `minmax()`
```css
minmax(200px, 1fr)
```
The track will not normally shrink below 200px and can grow to 1fr.

Remember: track sizing is not the same thing as item width.
