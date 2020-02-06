import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_REJECTED } from '../constants'
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

}