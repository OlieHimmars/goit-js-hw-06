const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listEl = document.querySelector('#ingredients');

const newItem = [];

ingredients.forEach((ingredient) => {
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  newItem.push(itemEl);
  
});

listEl.append(...newItem);
