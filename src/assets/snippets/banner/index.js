import './style.styl';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';


$('.banner--full .banner__list').slick({
    prevArrow: `<button type="button" class="slick-prev"><svg class="icon icon--carousel-prev" width="15" height="24"><use xlink:href="#carousel-prev" /></svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg class="icon icon--carousel-next" width="15" height="24"><use xlink:href="#carousel-next" /></svg></button>`,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.banner--grid .banner__list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev"><svg class="icon icon--carousel-prev" width="15" height="24"><use xlink:href="#carousel-prev" /></svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg class="icon icon--carousel-next" width="15" height="24"><use xlink:href="#carousel-next" /></svg></button>`,
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
