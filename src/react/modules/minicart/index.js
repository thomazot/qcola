import React from 'react';
import ReactDOM from 'react-dom';
import Minicart from './components/minicart';

const minicarts = Array.from(document.querySelectorAll('[data-component=minicart]'));

minicarts.forEach((root) => {
    ReactDOM.render(
        <Minicart />,
        root
    );
});