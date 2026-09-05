let buttonOne = document.getElementsByClassName("buttonOne")[0];
let buttonTwo = document.getElementsByClassName("buttonTwo")[0];
let showColor = document.querySelector(".showColor");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValue = () => {
  let myHexaValue = "0123456789ABCDEF"; //WORKING
  colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexaValue[Math.floor(Math.random() * 16)];
  }
  return colors;
};
showColor.addEventListener("click", () => {
  navigator.clipboard.writeText(showColor.innerText);
});
let handleButton1 = () => {
  rgb1 = hexValue();
  buttonOne.innerText = rgb1;
  buttonOne.style.backgroundColor = rgb1;
  console.log(rgb1);
  document.body.style.backgroundImage = ` linear-gradient(to right,${rgb1}, ${rgb2})`;
  showColor.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
let handleButton2 = () => {
  rgb2 = hexValue();
  buttonTwo.innerText = rgb2;
  buttonTwo.style.backgroundColor = rgb2;
  console.log(rgb2);
  document.body.style.backgroundImage = ` linear-gradient(to right,${rgb1}, ${rgb2})`;
  showColor.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
buttonOne.addEventListener("click", handleButton1);
buttonTwo.addEventListener("click", handleButton2);
