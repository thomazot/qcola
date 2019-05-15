import './style.styl';
import axios from 'axios';

document.addEventListener("DOMContentLoaded", function(){

    const tabs = document.querySelector('.product-tabs');
    if(tabs) {
        const urls = Array.from(tabs.querySelectorAll('[data-url]'));

        urls.forEach((element) => {
            const url = element.getAttribute('data-url');
            axios.get(url)
                .then((data) => data.data)
                .then((data) => element.innerHTML = data);
        });

        const customTabs = Array.from(document.querySelectorAll('.product-tabs--custom .product-tabs__link'));

        customTabs.forEach((customTab) => {
            customTab.addEventListener('click', (evt) => {
                const href = evt.currentTarget.getAttribute('href');
                const hash = href.match(/^[^#]*#(.*)/)[1];

                if(hash) {
                    const contents = Array.from(document.querySelectorAll('.prodBox'));
                    const current = document.querySelector(`#${ hash }`);

                    contents.forEach((content) => content.setAttribute('style', 'display:none'));
                    if(current) current.setAttribute('style', 'display: block');

                    customTabs.forEach((customTab) => customTab.classList.remove('on'));
                    evt.currentTarget.classList.add('on');

                }

                evt.preventDefault();
            });
        });

        if(customTabs.length) {
            customTabs[0].classList.add('on');
        }
    }
});

