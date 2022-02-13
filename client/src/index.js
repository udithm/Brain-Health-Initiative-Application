import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import combinedReducers from './reducers/CombinedReducers';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from "redux";
import makeServer from "./mockServer/mockServer";

makeServer();
const store = createStore(
    combinedReducers,
    compose(applyMiddleware(thunk))
) // this is creating a store. creating a store requires reducers and middlewares

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
