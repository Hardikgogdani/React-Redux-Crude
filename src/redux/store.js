import userReducer from './User/userReducer';
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';

const store =createStore(userReducer,compose(applyMiddleware(logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;