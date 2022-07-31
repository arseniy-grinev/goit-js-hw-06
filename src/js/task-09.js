function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

console.log(changeColorBtn, currentColor);
changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = `${document.body.style.backgroundColor}`;
}
