export default () => {
    const controls = Array.from(document.querySelectorAll('[aria-controls]'));
    const body     = document.querySelector('body');

    controls.forEach((control) => {
        control.addEventListener('click', (evt) => { 
            const currentTarget = evt.currentTarget;
            const id            = `#${ currentTarget.getAttribute('aria-controls') }`;
            const el            = document.querySelector(id);
            let   currentHidden = el.getAttribute('aria-hidden');
            let  hasFixed       = el.getAttribute('data-fixed') == 'false' ? false : true;

            if(currentHidden != 'false' && currentHidden != 'true') currentHidden = 'true'
            if(hasFixed) {
                if(currentHidden === 'true')                            body.classList.add('fixed');
                else                                                    body.classList.remove('fixed');
            }

            el.setAttribute('aria-hidden', currentHidden === 'true' ? false : true);
        });
        
    });
};