import userReducer from './User/userReducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

const persistedState = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : {
        data: []
    }
const store = createStore(userReducer, persistedState, compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(() => {
    localStorage.setItem('list', JSON.stringify(store.getState()))
})
export default store;