import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_REJECTED } from '../constants'
import DrinkService from '../../providers/services/ApiCocktails'
/*export const chargeCocktails = cocktails => (
    {
      type: 'CHARGE_COCKTAILS',
      payload: cocktails,
    }
);*/

export const getData = () => {
  return {
    type: 'FETCHING_DATA'
  }
}
export const getDataSuccess = data => {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    data
  }
}
export const getDataFailure = () => {
  return {
    type: 'FETCHING_DATA_FAILURE',
  }
}
export function fetchData(data, loading, value) {
  loading = false;
  return async (dispatch) => {
    try{
      if(!loading)
      {
        dispatch(getData());
        let drinks = DrinkService.getDrinks("vod")
      }
    }catch(err)
    {
      dispatch(getDataFailure(err))
    }
  }
}