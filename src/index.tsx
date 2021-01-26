import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root'),
);

// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot as unknown) {
    import.meta.hot.accept();
}
