const refs = {
    input: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameEl.textContent = event.currentTarget.value;
};
