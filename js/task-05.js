const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// console.dir(outputEl);
// console.dir(inputEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        outputEl.textContent = event.currentTarget.value;
    }
    else {
        outputEl.textContent = 'Anonymous';
    }
    
    
}

