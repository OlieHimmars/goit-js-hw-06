function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector('#controls input'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('#controls button'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  //createBtn: document.querySelector('[data-action="create"]'),
}
//destroyBtn = refs.createBtn.nextElementSibling;
//console.log(destroyBtn);

const frag = document.createDocumentFragment();

refs.createBtn.addEventListener('click', createBoxes);
//refs.destroyBtn.addEventListener('click', destroyAll);

const num = Number(refs.input.value)
console.log(num);

function createBoxes(num) {
  refs.boxes.classList.add('image--item');
  for (let i = 0; i < Number(refs.input.value); i += 1) {
    console.log('hi');
    const box = '<div height=100px ></div >';
    //box.style.color = getRandomHexColor();
    console.log(box);
    frag.append(box);
    console.log(frag);
}
};

refs.boxes.insertAdjacentHTML('beforeend', frag);

function destroyAll(event) {
  console.log('hi');
  refs.boxes = '';
};




