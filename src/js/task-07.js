const fontSizeContoller = document.querySelector('#font-size-control');
const textToControl = document.querySelector('#text');

// console.dir(fontSizeContoller);
// console.dir(textToControl);

fontSizeContoller.addEventListener('input', onSizeChange);

function onSizeChange(event) {
    const size = event.currentTarget.value
    textToControl.style.fontSize = `${size}px`;
    // console.log(event.currentTarget.value);
    // textToControl.style.color = "red"
    // console.log(textToControl.style.fontSize);
}