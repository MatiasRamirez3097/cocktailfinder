import {APIConnector, Settings} from '../base/index';
//import {API} from '../../config/index';

const apiConnector = new APIConnector({timeout: 50000});

export default class CocktailsConfig {
  //static props: any;

  static get endpoint() {
    return `${Settings.apiRestEndpoint}`;
  }

  static get getDrinks() {
    return `${CocktailsConfig.endpoint}/search.php?s=`;
  }

  static get APIConnector() {
    return apiConnector;
  }

  /*static get endpoint() {
    return API;
  }

  static getdrinks(text) {
    console.log(`${CocktailsConfig.endpoint}`);
    return `${CocktailsConfig.endpoint}/search.php?s=${text}`;
  }

  static get APIConnector() {
    return apiConnector;
  }*/
}
/*import { Settings, APIConnector } from '../base';

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ServiceConfig {
  static get endpoint() {
    return `${Settings.apiRestEndpoint}`;
  }

  static get getExample() {
    return `${ServiceConfig.endpoint}/endpointExample`;
  }

  static get APIConnector() {
    return apiConnector;
  }
}*/
