const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
let randomColor  = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}