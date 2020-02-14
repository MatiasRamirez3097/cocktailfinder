import {
  GET_COCKTAILS_REQUEST,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from '../actions/types';

const initialState = {
  cocktails: [],
  loading: false,
  error: null,
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COCKTAILS_SUCCESS:
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
