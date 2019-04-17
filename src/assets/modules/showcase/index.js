import './style.styl';

define(['jquery', 'slick-carousel'], ($) => {
    $('.showcase__list[data-carousel=true]').each(function(){
        $(this).find('.showcase__item--empty').remove();
        $(this).slick({
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
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5   
                    }
                }
            ]   
        });
    });
});