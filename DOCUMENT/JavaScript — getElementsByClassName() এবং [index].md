# JavaScript — getElementsByClassName() এবং [index]

## ১. getElementsByClassName() কী?

`getElementsByClassName()` দিয়ে কোনো নির্দিষ্ট **class-এর element** খুঁজে বের করা হয়।

```js
document.getElementsByClassName("buttonOne")
```

এটি সরাসরি একটি element না দিয়ে একটি **HTMLCollection** দেয়।

অর্থাৎ, একই class একাধিক element-এর থাকতে পারে।

---

## ২. `[0]`, `[1]`, `[2]` কী বোঝায়?

Collection-এর element-এর অবস্থানকে **index** বলা হয়।

JavaScript-এ index শুরু হয় `0` থেকে।

```text
[0] → ১ম element
[1] → ২য় element
[2] → ৩য় element
[3] → ৪র্থ element
```

তাই:

```js
document.getElementsByClassName("buttonOne")[0]
```

এর অর্থ:

**buttonOne class-এর প্রথম element-টি আমাকে দাও।**

---

## ৩. `buttonTwo` মানেই ২ নম্বর button নয়

এটা খুব গুরুত্বপূর্ণ।

```html
<button class="buttonOne">Button 1</button>
<button class="buttonTwo">Button 2</button>
```

এখানে:

- `buttonOne` হলো একটি **class-এর নাম**
- `buttonTwo` হলো আরেকটি **class-এর নাম**

`buttonTwo` নামের মধ্যে `Two` থাকলেও JavaScript এটাকে "দ্বিতীয় button" হিসেবে ধরে না।

---

## ৪. তাহলে buttonTwo-এর `[0]` কেন?

যদি HTML হয়:

```html
<button class="buttonOne">Button 1</button>
<button class="buttonTwo">Button 2</button>
```

তাহলে:

```js
document.getElementsByClassName("buttonTwo")[0]
```

সঠিক।

কারণ `buttonTwo` class-এর element-এর সংখ্যা মাত্র **একটি**।

Collection:

```text
buttonTwo
   ↓
[0] → Button 2
```

এখানে `[0]` মানে **প্রথম element**।

এটা "প্রথম button" বোঝাচ্ছে না; এটা `buttonTwo` class-এর collection-এর প্রথম element বোঝাচ্ছে।

---

## ৫. `[2]` দিলে কী হবে?

যদি লিখি:

```js
document.getElementsByClassName("buttonTwo")[2]
```

তাহলে JavaScript খুঁজবে:

**buttonTwo class-এর ৩ নম্বর element।**

কারণ:

```text
[0] → ১ম
[1] → ২য়
[2] → ৩য়
```

কিন্তু যদি `buttonTwo` class-এর মাত্র একটি element থাকে:

```html
<button class="buttonTwo">Button 2</button>
```

তাহলে `[2]` দিলে কোনো element পাওয়া যাবে না।

---

# ৬. একই class একাধিক element-এ থাকলে

যেমন:

```html
<button class="colorButton">Red</button>
<button class="colorButton">Green</button>
<button class="colorButton">Blue</button>
```

এখন:

```js
document.getElementsByClassName("colorButton")
```

এর মধ্যে ৩টি element আছে।

```text
[0] → Red
[1] → Green
[2] → Blue
```

তাই:

```js
let btn1 = document.getElementsByClassName("colorButton")[0];
let btn2 = document.getElementsByClassName("colorButton")[1];
let btn3 = document.getElementsByClassName("colorButton")[2];
```

---

# ৭. মনে রাখার সহজ নিয়ম

### `getElementsByClassName()`

```js
document.getElementsByClassName("className")[index]
```

এখানে:

```text
className → কোন class খুঁজব
[index]   → সেই class-এর collection-এর কোন element নেব
```

### Index মনে রাখার নিয়ম:

```text
০ = ১ম
১ = ২য়
২ = ৩য়
৩ = ৪র্থ
```

---

# ৮. ID-এর ক্ষেত্রে পার্থক্য

ID সাধারণত একটি নির্দিষ্ট element-এর জন্য ব্যবহার করা হয়।

```html
<button id="buttonOne">Button 1</button>
```

তখন:

```js
document.getElementById("buttonOne")
```

এখানে `[0]` লাগবে না।

কারণ `getElementById()` সরাসরি একটি element দেয়।

---

## সবচেয়ে গুরুত্বপূর্ণ কথা

```text
buttonTwo
```

এর `Two` দেখে **২ নম্বর element** ভাবা যাবে না।

আর:

```text
[2]
```

এর অর্থ **২ নম্বর নয়, ৩ নম্বর element**।

কারণ JavaScript-এর index শুরু হয় `0` থেকে।

### সংক্ষেপে:

```text
Class → অনেক element হতে পারে → Collection → [index] দিয়ে element নির্বাচন

ID → সাধারণত একটি নির্দিষ্ট element → [index] দরকার নেই
```
