import {
  GET_COCKTAILS_REQUEST,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from '../actions/types';

const initialState = {
  //Have a people array responsible for getting the cocktails and setting to the array.
  cocktails: [],
  //Have the loading state indicate if it's done getting cocktails.
  loading: false,
  //Have state for error message for recieving an error.
  error: null,
};

const cocktailsReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_COCKTAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COCKTAILS_SUCCESS:
      console.log('success', action.payload);
      return {
        ...state,
        cocktails: action.payload,
        loading: false,
      };
    case GET_COCKTAILS_ERROR:
      return {
        ...state,
        cocktails: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
