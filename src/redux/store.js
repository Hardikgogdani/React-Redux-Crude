import userReducer from './User/userReducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {
        data: []
    }
const store = createStore(userReducer, persistedState, compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store;