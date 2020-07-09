import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min'
import 'antd/dist/antd.css';
import 'lodash/lodash.js'
import 'react-modal-video/css/modal-video.min.css';
//STORE
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./services/reducers";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
    // </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
