import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_REJECTED } from '../constants'
import getDrinks from '../../providers/services/ApiCocktails'
export const chargeCocktails = cocktails => (
    {
      type: 'CHARGE_COCKTAILS',
      payload: cocktails,
    }
);

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
export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData())
    getDrinks()
      .then(([response, json]) => {
        dispatch(getDataSuccess(json));
      })
      .catch((err) => console.log(err))
  }
}