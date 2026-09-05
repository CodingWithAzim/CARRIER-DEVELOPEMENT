let buttonOne = document.querySelector(".buttonOne");
let buttonTwo = document.querySelector(".buttonTwo");
let showColor = document.getElementsByClassName("showColor")[0];
let myHexValue = "0123456789abcdef";
let rgb1 = "#5B06D2";
let rgb2 = "#34BC59";

let colorMaker = () => {
  let generatedHex = "#";
  for (let i = 0; i < 6; i++) {
    generatedHex += myHexValue[Math.floor(Math.random() * 16)];
  }
  console.log(generatedHex);
  return generatedHex;
};

// let handleButtonOne = () => {
//   rgb1 = colorMaker();
//   rgb2 = colorMaker();
//   showColor.innerText =
//     document.body.style.backgroundImage = `background-image:  linear-gradient( to right, ${rgb1}, ${rgb2} )`;

//   document.body.style.backgroundImage = `linear-gradient( to right, ${rgb1}, ${rgb2} )`;
// };
let copyCodeFunction = showColor.addEventListener("click", () => {
  navigator.clipboard.writeText(showColor.innerText);
});
let handleButtonOne = () => {
  rgb1 = colorMaker();

  buttonOne.innerText = rgb1;

  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;

  showColor.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};
// let handleButtonTwo = () => {
//   rgb1 = colorMaker();
//   rgb2 = colorMaker();
//   showColor.innerText =
//     document.body.style.backgroundImage = `background-image:  linear-gradient( to right, ${rgb1}, ${rgb2} )`;
//   document.body.style.backgroundImage = `linear-gradient( to right, ${rgb1}, ${rgb2} )`;
// };
let handleButtonTwo = () => {
  rgb2 = colorMaker();

  buttonOne.innerText = rgb1;

  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;

  showColor.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};
buttonOne.addEventListener("click", handleButtonOne);
buttonTwo.addEventListener("click", handleButtonTwo);
