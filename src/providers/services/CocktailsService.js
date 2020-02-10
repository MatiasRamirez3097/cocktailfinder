import CocktailsConfig from './CocktailsConfig';

export default class CocktailsService {
  static getDrinks(text) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = CocktailsConfig.getDrinks(text);
        console.log('hooolalalal');
        const response = await CocktailsConfig.APIConnector.get(endpoint);
        console.log('hooooooolaaaaaaaaa');
        if (response != null) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        console.log('\nError on getDrinks', error, '\n');
        reject();
      }
    });
  }
}
