import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
let store = createStore(rootReducer, applyMiddleware(thunk));
//store = configureStore();
export default store;
