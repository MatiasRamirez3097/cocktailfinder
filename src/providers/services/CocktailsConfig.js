import {APIConnector} from '../base/index';
import {API} from '../../config/index';

const apiConnector = new APIConnector({timeout: 50000});

export default class CocktailsConfig {
  //static props: any;
  static get endpoint() {
    return API;
  }

  static drinks(text) {
    console.log(`${CocktailsConfig.endpoint}`);
    return `${CocktailsConfig.endpoint}/search.php?s=${text}`;
  }

  static get APIConnector() {
    return apiConnector;
  }
}
