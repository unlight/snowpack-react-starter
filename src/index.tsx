import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import App from './App/App';
import { production } from './environments/environment';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot && import.meta.env.MODE === 'development') {
    console.log('__HOT__');
    // @ts-ignore
    import.meta.hot.accept();
}
