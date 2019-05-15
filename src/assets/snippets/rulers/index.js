import './style.styl';
import 'slick-carousel';


$('.rulers__list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]   
});
