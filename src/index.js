import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
);

ReactDOM.render(
    <Root store={store} />, 
    document.getElementById('root'));