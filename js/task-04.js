const refs = {
    resultValue: document.querySelector('#value'),
    counterDecrement: document.querySelector('[data-action="decrement"]'),
    counterIncrement: document.querySelector('[data-action="increment"]'),
}
let counterValue = 0;

// console.dir(refs.resultValue);


refs.counterDecrement.addEventListener('click', onDecrementClick);

refs.counterIncrement.addEventListener('click', onINcrementClick)

function onDecrementClick() {
    counterValue -= 1;
    // console.log(counterValue);
    refs.resultValue.textContent = `${counterValue}`;
}

function onINcrementClick() {
    counterValue += 1;
    // console.log(counterValue);
    refs.resultValue.textContent = `${counterValue}`;
}
