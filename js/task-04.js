const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
};

const valueEl = document.querySelector('#value');

const decrBtn = document.querySelector('button[data-action="decrement"]');

const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener('click', function () {
    if(counterValue.value > 0) {
        counterValue.decrement();
        valueEl.textContent = counterValue.value;
    };
})

incrBtn.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})

