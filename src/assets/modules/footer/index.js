import './style.styl';

$('.footer__title').click(function(){
    $(this).closest('div').toggleClass('on');
});