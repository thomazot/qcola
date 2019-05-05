import './style.styl';

define(['jquery'], ($) => {
    const button = $('#bt-submit-comments');

    if(button) {
        const buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
        button.after(buttonAction);

        buttonAction.click(() => {
            button.trigger('click');
        });
    }
});