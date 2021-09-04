import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.css';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);

