import {combineReducers} from 'redux';
import cocktailsReducer from './cocktails';
const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});
export default rootReducer;
