import {combineReducers} from 'redux';
import cocktailsReducer from './cocktails';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  form: formReducer,
});
export default rootReducer;
