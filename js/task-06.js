const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    if (refs.input.value.length > refs.input.dataset.length) {
        refs.input.classList.add('invalid');
    } else if (refs.input.value.length = refs.input.dataset.length) {
        refs.input.classList.add('valid');
    }
};
