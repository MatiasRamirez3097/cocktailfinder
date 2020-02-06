import ServiceConfig from "./ServiceConfig";

export default class DrinkService {
  static getDrinks(text) {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = `${ServiceConfig.drinks}${text}`;
        let response = ServiceConfig.APIConnector.get(endpoint);
        if (response.__ok) {
          response.__ok = null;
          resolve(response);
        } else reject();
      } catch (error) {
        reject(error);
      }
    });
  }
}