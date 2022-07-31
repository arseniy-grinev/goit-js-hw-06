function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberOfBoxes = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let numberOfBoxes = 0;

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
console.dir(inputNumberOfBoxes);


function onCreateBtnClick() {
  const min = parseInt(inputNumberOfBoxes.min);
  const max = parseInt(inputNumberOfBoxes.max);
  numberOfBoxes = inputNumberOfBoxes.value;
  if (numberOfBoxes < min) {
    return alert('маловато')
  }
  else if (numberOfBoxes > max) {
    return alert(`количество не должно превышать ${max}`);
  }

  boxesEl.innerHTML = createBoxesRow(numberOfBoxes).join(''); 
}

function onDestroyBtnClick() {
  boxesEl.innerHTML = "";
  inputNumberOfBoxes.value = "" 
}

function createBoxesRow(number) {
  const boxes = [];
  for (let i = 0; i < number; i += 1) {
    const boxSize = 30 + 10 * i;
    const boxColor = getRandomHexColor();
    const newBox =
     `<div class="div-${i+1}">
      <style>
        .div-${i+1} {
          width: ${boxSize}px;
          height: ${boxSize}px;
          background-color: ${boxColor};
          display: inline-block;
          margin-right: 10px
        }
      </style>
    </div>`;
    boxes.push(newBox);
  }
  return boxes;
}



