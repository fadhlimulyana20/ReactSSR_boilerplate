import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div> {renderRoutes(Routes)} </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));