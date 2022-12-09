const refs = {
    input: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {

    if (event.currentTarget.value === '' || event.currentTarget.value === ' ') {
        return refs.nameEl.textContent = "Anonymous";
    } 
    console.log(event.currentTarget.value);
    refs.nameEl.textContent = event.currentTarget.value;
};
