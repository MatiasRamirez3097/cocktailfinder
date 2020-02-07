import {
  GET_COCKTAILS_REQUEST,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from './types';

import CocktailsService from '../../providers/services/CocktailsService';
/*export const chargeCocktails = cocktails => (
    {
      type: 'CHARGE_COCKTAILS',
      payload: cocktails,
    }
);*/

export function getCocktailsAction(text) {
  return async dispatch => {
    dispatch({type: GET_COCKTAILS_REQUEST});
    try {
      const response = await CocktailsService.getDrinks(text);
      dispatch({type: GET_COCKTAILS_SUCCESS, payload: response.drinks});
    } catch (err) {
      dispatch({type: GET_COCKTAILS_ERROR, error: err});
    }
  };
}
