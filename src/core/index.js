import Scrolling from './plugins/scrolling';
import Aria from './plugins/aria';
import objectFitImages from 'object-fit-images';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');

    // Add Scrolling page body
    Scrolling();

    // Object Fit
    objectFitImages();

    // Aria 
    Aria();

    // Add Class After load
    body.classList.remove('preload');

}, false);