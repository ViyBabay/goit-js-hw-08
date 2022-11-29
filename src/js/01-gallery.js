// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const newGallery = document.querySelector('.gallery');
const galleryItemsMarkup = galleryItemsMarkupCreate(galleryItems);

newGallery.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

function galleryItemsMarkupCreate(pics) {
    return pics
        .map((pic) => 
    `<a class="gallery__item" href="${pic.original}">
    <img class="gallery__image"
    src="${pic.preview}" 
    alt="${pic.description}" />
    </a>`
    )
    .join("");
}

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);

