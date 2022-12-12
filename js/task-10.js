function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector('#controls input'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  //ось так не працює
  //destroyBtn: document.querySelector('[data-action="destroy"]'),
  //createBtn: document.querySelector('[data-action="create"]'),
}

const fragment = document.createDocumentFragment();

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyAll);

function createBoxes(num) {
  num = refs.input.value;
  let baseBoxSize = 30;
  refs.boxes.style.display = 'flex';

  for (let i = 0; i < num; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${baseBoxSize}px`;
    box.style.height = `${baseBoxSize}px`;
    fragment.appendChild(box);
    baseBoxSize += 10;
  }
  //ось так не працює
//  refs.boxes.insertAdjacentHTML('beforeend', fragment);
  refs.boxes.appendChild(fragment);
};

function destroyAll(event) {
  refs.boxes.innerHTML = '';
};
