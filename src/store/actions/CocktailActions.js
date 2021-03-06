import {
  GET_COCKTAILS_REQUEST,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
  RESET_COCKTAILS,
} from './types';

import CocktailsService from '../../provider/services/CocktailsService';

export function resetStateAction() {
  return {type: RESET_COCKTAILS};
}

export function getCocktailsAction(text) {
  return async dispatch => {
    dispatch({type: GET_COCKTAILS_REQUEST});
    try {
      const response = await CocktailsService.getDrinks(text);
      dispatch({type: GET_COCKTAILS_SUCCESS, payload: response.drinks});
    } catch (err) {
      dispatch({type: GET_COCKTAILS_ERROR, error: 'Oops! ' + err});
    }
  };
}
