let buttonOne = document.getElementsByClassName("buttonOne")[0];
let buttonTwo = document.querySelector(".buttonTwo");
let buttonThree = document.querySelector(".buttonThree");
let showColor = document.querySelector(".showColor");

let copiedText = showColor.addEventListener("click", () => {
  navigator.clipboard.writeText(showColor.textContent);
  alert("text copied");
});

let hexaValue = "0123456789abcdef";

let rgb1 = "#5b06d2";
let rgb2 = "#34bc59";

let hexToRgbConverter = (hex) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

let colorMaker = () => {
  let generatedHexa = "#";
  for (let i = 0; i < 6; i++) {
    generatedHexa += hexaValue[Math.floor(Math.random() * 16)];
  }
  return generatedHexa;
};

let rgbColor1 = hexToRgbConverter(rgb1);
let rgbColor2 = hexToRgbConverter(rgb2);

buttonOne.addEventListener("click", () => {
  rgb1 = colorMaker();

  rgbColor1 = hexToRgbConverter(rgb1);

  // rgbColor1 = hexToRgbConverter(rgb1);
  // rgb2 = colorMaker();
  console.log(rgb1);
  buttonOne.textContent = rgb1;
  document.body.style.backgroundImage = `       linear-gradient( to right,${rgb1}, ${rgb2} )
        `;
  showColor.textContent = `
          background-image: linear-gradient( to right,${rgbColor1} ,${rgbColor2} );
        `;
});

buttonTwo.addEventListener("click", () => {
  rgb1 = colorMaker();
  rgb2 = colorMaker();
  rgbColor1 = hexToRgbConverter(rgb1);
  rgbColor2 = hexToRgbConverter(rgb2);
  console.log(rgb2);
  buttonTwo.textContent = rgb2;
  document.body.style.backgroundImage = `       linear-gradient( to right,${rgb1}, ${rgb2} )
        `;
  showColor.textContent = `
          background-image: linear-gradient( to right,${rgbColor1} ,${rgbColor2} );
        `;
});
buttonThree.addEventListener("click", () => {
  // rgb1 = colorMaker();
  rgb2 = colorMaker();
  rgbColor2 = hexToRgbConverter(rgb2);
  console.log(rgb2);
  buttonThree.textContent = rgb2;
  document.body.style.backgroundImage = `       linear-gradient( to right,${rgb1}, ${rgb2} )
        `;
  showColor.textContent = `
          background-image: linear-gradient( to right,${rgbColor1} ,${rgbColor2} );
        `;
});
