const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createImgMarkup = ({ url, alt }) => {
  return `
  <li class = "gallery__item">
    <img src = "${url}" alt = "${alt}" class = "gallery__img">
  </li>
  `
}
// console.log(createImgMarkup(images[1]));

const createGalleryRow = images.map(createImgMarkup).join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', createGalleryRow)

