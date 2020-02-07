import {APIConnector, Settings} from '../base/index';

const apiConnector = new APIConnector({timeout: 50000});

export default class CocktailsConfig {
  static getDrinks(text) {
    return `${Settings.apiRestEndpoint}/search.php?s=${text}`;
  }

  static get APIConnector() {
    return apiConnector;
  }
}
