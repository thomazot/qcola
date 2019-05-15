import './style.styl';


if($('.product--page-product')) {
    $('.product--page-product').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        $('#button-buy').trigger('click');
    });
}
