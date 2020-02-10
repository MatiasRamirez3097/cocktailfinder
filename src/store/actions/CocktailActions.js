import {
  GET_COCKTAILS_REQUEST,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from './types';

import CocktailsService from '../../providers/services/CocktailsService';

export function getCocktailsAction(text) {
  return async dispatch => {
    dispatch({type: GET_COCKTAILS_REQUEST});
    try {
      console.log('antes de response');
      const response = await CocktailsService.getDrinks(text);
      console.log('antes de success');
      dispatch({type: GET_COCKTAILS_SUCCESS, payload: response.drinks});
    } catch (err) {
      console.log(' es un errorrr');
      dispatch({type: GET_COCKTAILS_ERROR, error: err});
    }
  };
}
