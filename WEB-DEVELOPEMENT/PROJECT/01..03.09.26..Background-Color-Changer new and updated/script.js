let buttonOne = document.getElementsByClassName("buttonOne")[0];

let buttonTwo = document.querySelector(".buttonTwo");

let buttonThree = document.querySelector(".buttonThree");

let showColor = document.querySelector(".showColor");

/* =========================
   COPY CSS CODE
========================= */

showColor.addEventListener("click", () => {
  navigator.clipboard.writeText(showColor.textContent);

  alert("text copied");
});

/* =========================
   HEX CHARACTERS
========================= */

let hexaValue = "0123456789abcdef";

/* =========================
   INITIAL COLORS
========================= */

let rgb1 = "#5b06d2";

let rgb2 = "#49ee7a";

/* =========================
   HEX TO RGB
========================= */

let hexToRgbConverter = (hex) => {
  let r = parseInt(hex.slice(1, 3), 16);

  let g = parseInt(hex.slice(3, 5), 16);

  let b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

/* =========================
   RANDOM COLOR MAKER
========================= */

let colorMaker = () => {
  let generatedHexa = "#";

  for (let i = 0; i < 6; i++) {
    generatedHexa += hexaValue[Math.floor(Math.random() * 16)];
  }

  return generatedHexa;
};

/* =========================
   INITIAL RGB VALUES
========================= */

let rgbColor1 = hexToRgbConverter(rgb1);

let rgbColor2 = hexToRgbConverter(rgb2);

/* =========================
   LEFT COLOR BUTTON
========================= */

buttonOne.addEventListener("click", () => {
  rgb1 = colorMaker();

  rgbColor1 = hexToRgbConverter(rgb1);

  console.log(rgb1);

  buttonOne.textContent = rgb1;

  document.body.style.backgroundImage = `linear-gradient(
        to right,
        ${rgb1},
        ${rgb2}
      )`;

  showColor.textContent = `background-image: linear-gradient(
        to right,
        ${rgbColor1},
        ${rgbColor2}
      );`;
});

/* =========================
   BOTH COLOR BUTTON
========================= */

buttonTwo.addEventListener("click", () => {
  rgb1 = colorMaker();

  rgb2 = colorMaker();

  rgbColor1 = hexToRgbConverter(rgb1);

  rgbColor2 = hexToRgbConverter(rgb2);

  console.log(rgb1, rgb2);

  buttonOne.textContent = rgb1;

  buttonTwo.textContent = rgb2;

  buttonThree.textContent = rgb2;

  document.body.style.backgroundImage = `linear-gradient(
        to right,
        ${rgb1},
        ${rgb2}
      )`;

  showColor.textContent = `background-image: linear-gradient(
        to right,
        ${rgbColor1},
        ${rgbColor2}
      );`;
});

/* =========================
   RIGHT COLOR BUTTON
========================= */

buttonThree.addEventListener("click", () => {
  rgb2 = colorMaker();

  rgbColor2 = hexToRgbConverter(rgb2);

  console.log(rgb2);

  buttonThree.textContent = rgb2;

  document.body.style.backgroundImage = `linear-gradient(
        to right,
        ${rgb1},
        ${rgb2}
      )`;

  showColor.textContent = `background-image: linear-gradient(
        to right,
        ${rgbColor1},
        ${rgbColor2}
      );`;
});
