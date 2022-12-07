const categoriesNumber = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesNumber.length);

categoriesNumber.forEach(itemEl => {

    const textEl = itemEl.querySelector('h2');
    console.log('Category: ', textEl.textContent);
    const subCategories = itemEl.querySelectorAll('li');
    console.log('Elements: ',
        subCategories.length)
    
});