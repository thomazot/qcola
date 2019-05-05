import './style.styl';
import Inputmask from 'inputmask'

define(['jquery'], function($){

    function buttonMoreLess() {
        const quantity = $('#quant');

        if(quantity) {
            const more = $('<button type="button" class="button button--more">+</button>');
            const less = $('<button type="button" class="button button--less">-</button>');

            quantity.closest('label').addClass('quantity-more-less');

            quantity
                .before(less)
                .after(more);

            more.click(() => {
                let value = parseInt(quantity.val());

                if(value) {
                    quantity.val(++value);
                }
            });

            less.click(() => {
                let value = parseInt(quantity.val());

                if(value && (value - 1) > 0) {
                    quantity.val(--value);
                }
            });
        }
    }

    buttonMoreLess();

    $(document).on('TRAY:VARIANT_FORM', function(){
        buttonMoreLess();
    });

    // $tray('#calculator__width, #calculator__height').inputmask({alias: 'numeric', 
    //     allowMinus: false,  
    //     digits: 2 })

    $('#calculator').submit(function(evt){
        evt.preventDefault();
        const cWidth = parseFloat($('#calculator__width').val());
        const cHeight = parseFloat($('#calculator__height').val());
        const resultHTML = $('#calculator__result');

        if(cWidth && cHeight) {
            const result = cWidth * cHeight;
            const HTML = ` ${result} <span class="n">M²</span>`;

            resultHTML.html(HTML);
        } else {
            const err = '<span class="err">Valores Invalidos</span>';
            resultHTML.html(err);
        }

        $('.calculator__result').attr('aria-hidden', 'false');
        $('.calculator__form').attr('aria-hidden', 'true');

    });

    $('.calculator__back').click(() => {
        $('.calculator__result').attr('aria-hidden', 'true');
        $('.calculator__form').attr('aria-hidden', 'false');
        $('#calculator__width').val('');
        $('#calculator__height').val('');
    });

})