const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')
// const elements = ingredients.map(ingredient => {
//   const element = document.createElement('li');
//   element.classList.add('item');
//   element.textContent = ingredient;

// })
// console.log(elements);
const addingElements = ingredients => {
  const elements = [];
  for (const ingredient of ingredients) {
    const element = document.createElement('li');
    element.classList.add('item');
    element.textContent = ingredient;
    elements.push(element);
  }

  console.log(elements);

  // listEl.append([...elements]);
  
}

addingElements();
// const addingElements() => listEl.append([...elements]);
