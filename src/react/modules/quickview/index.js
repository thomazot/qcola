
import React from 'react';
import ReactDOM from 'react-dom';

import Minicart from './components/quickview';
import { Provider } from 'react-redux';
import configureStore from './store';

const Store = configureStore();
const minicarts = Array.from(document.querySelectorAll('[data-component=quickview]'));

minicarts.forEach(root => {
    ReactDOM.render(
        <Provider store={ Store }>
            <Minicart />
        </Provider>,
        root
    );
});


