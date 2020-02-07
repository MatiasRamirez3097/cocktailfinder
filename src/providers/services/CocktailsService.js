import CocktailsConfig from './CocktailsConfig';

export default class CocktailsService {
  static getDrinks(text) {
    console.log('getDrinks');
    return new Promise(async (resolve, reject) => {
      console.log('promise');
      try {
        console.log('try');
        const endpoint = CocktailsConfig.drinks(text);
        console.log(endpoint);
        const response = await CocktailsConfig.APIConnector.get(endpoint);
        console.log('llego hasta aca', endpoint, response);
        if (response.ok) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        console.log('cath', error);
        reject(error);
      }
    });
  }
}
