import React from 'react';
import ReactDOM from 'react-dom';
import "../src/assets/styles/global.scss"
import "../src/assets/styles/index.scss"
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);