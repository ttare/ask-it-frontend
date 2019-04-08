import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const configureStore = (initalState = {}) => createStore(rootReducer, initalState, applyMiddleware(thunk));

export default configureStore;
