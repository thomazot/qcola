import Scrolling from './plugins/scrolling';
import Aria from './plugins/aria';
import objectFitImages from 'object-fit-images';
import CustomEvent from './plugins/custom-events';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');

    // Custom Events
    CustomEvent();

    // Add Scrolling page body
    Scrolling();

    // Object Fit
    objectFitImages();

    // Aria 
    Aria();

    // Add Class After load
    body.classList.remove('preload');

    $tray('[data-tray-login]').click((evt) => { evt.preventDefault(); $tray('tray-login').show(); });

}, false);