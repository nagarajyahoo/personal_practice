import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from "./model/reducers/LoginReducer";
import AlbumReducer from "./model/reducers/AlbumReducer";
import GalleryReducer from "./model/reducers/GoogleGalleryReducer";
import RegistrationReducer from "./model/reducers/RegistrationReducer";
import CommitteeReducer from "./model/reducers/CommitteeReducer";

//create reducers
const reducers = combineReducers({
    login: LoginReducer,
    album: AlbumReducer,
    gallery: GalleryReducer,
    regReducer: RegistrationReducer,
    committee: CommitteeReducer
});

//create composers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));

//create store to combine both of them
const store = createStore(reducers, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
