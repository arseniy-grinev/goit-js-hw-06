const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createElements = elements => {
  return elements.map(ingredient => {
    const element = document.createElement('li');
    element.classList.add('item');
    element.textContent = ingredient;
    return element;

  })
};
const listEl = document.querySelector('#ingredients');
listEl.append(...createElements(ingredients));
