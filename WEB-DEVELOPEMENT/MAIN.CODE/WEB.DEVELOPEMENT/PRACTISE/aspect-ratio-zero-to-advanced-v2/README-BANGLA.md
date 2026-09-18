# aspect-ratio — Zero to Advanced v2

এই version-এ প্রতিটি example-এর পাশে ৩টি জিনিস আছে:
1. কী code ব্যবহার হয়েছে
2. এখানে কেন ব্যবহার করেছি
3. সারমর্ম — এই জায়গায় আসল লাভ কী

## চালানোর নিয়ম
`index.html` browser-এ open করো। তারপর `style.css`-এ experiment section-এর `aspect-ratio` বদলে দেখো।

পরীক্ষা:
```css
aspect-ratio: 1;
aspect-ratio: 2 / 1;
aspect-ratio: 1 / 2;
aspect-ratio: 16 / 9;
```

## খাতার মূল note
`aspect-ratio` → Width ও Height-এর অনুপাত ঠিক করে।

`aspect-ratio: 1;` → 1:1 → Width = Height.

`width: 220px + aspect-ratio: 1` → 220 × 220.

Responsive use:
`width: 100% + aspect-ratio: 16 / 9` → Width fluid, proportion fixed.
