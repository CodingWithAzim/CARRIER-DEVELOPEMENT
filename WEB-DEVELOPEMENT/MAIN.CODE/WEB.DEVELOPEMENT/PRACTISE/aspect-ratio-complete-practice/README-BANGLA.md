# aspect-ratio Complete Practice

## চালানোর নিয়ম
`index.html` ব্রাউজারে open করো।

## মূল ধারণা
```css
.box {
  width: 220px;
  aspect-ratio: 1;
}
```

এখানে:
- width = 220px
- aspect-ratio = 1:1
- তাই height = 220px
- ফল = 220 × 220

## নিজে পরীক্ষা
`style.css`-এ ratio বদলে দেখো:
```css
aspect-ratio: 1;
aspect-ratio: 2;
aspect-ratio: 2 / 1;
aspect-ratio: 1 / 2;
aspect-ratio: 16 / 9;
```

## খাতার নোট
`aspect-ratio: 1;` → Width ও Height-এর অনুপাত 1:1।
অর্থাৎ Width যত হবে, Height-ও তত হবে।
