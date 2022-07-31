const categoriesEl = document.querySelector('#categories');
console.log("Number of categories: ", categoriesEl.children.length);
console.log();

const itemEl = document.querySelectorAll('.item');
// console.log();

const loggingResult = itemEl => {
    itemEl.forEach(element => {
        const itemTitle = element.querySelector('h2');
        console.log('Category: ', itemTitle.textContent)
        const itemList = element.querySelector('ul');
        console.log('Elements: ', itemList.children.length)
    });
} 
loggingResult(itemEl);
