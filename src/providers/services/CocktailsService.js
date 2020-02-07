import CocktailsConfig from './CocktailsConfig';

export default class CocktailsService {
  static getDrinks(text) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = CocktailsConfig.getDrinks(text);
        const response = await CocktailsConfig.APIConnector.get(endpoint);
        if (response.drinks) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        console.log('\nError on getDrinks', error, '\n');
        reject(error);
      }
    });
  }
}
