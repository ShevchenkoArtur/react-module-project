import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from "redux-thunk";

const middlewares = [thunk]
const isDevelopmentMode = process.env.NODE_ENV === 'development'

if (isDevelopmentMode) {
    middlewares.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;