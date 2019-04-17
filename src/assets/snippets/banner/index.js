import './style.styl';
import 'slick-carousel/slick/slick.css';

define(['jquery', 'slick-carousel'], function($) {
    $('.banner--full .banner__list').slick({
        prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`
    });

    $('.banner--grid .banner__list').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4   
                }
            }
        ]   
    });
});