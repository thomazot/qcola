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

    // events 
    $tray(document).ajaxComplete((evet, xhr, settings) => {
        if(settings.url.indexOf('/product/variant_form/') !== -1) { 
            $(document).trigger('TRAY:VARIANT_FORM');
        }
    })

}, false);
