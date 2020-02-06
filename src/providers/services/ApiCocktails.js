import ServiceConfig from "./ServiceConfig";

export default class DrinkService {
  static getDrinks(text) {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = `${ServiceConfig.drinks}${text}`;
        resolve(endpoint)
        let response = await ServiceConfig.APIConnector.get(endpoint, {});
        if (response.ok) {
          response.ok = null;
          resolve(response);
        } 
        else
        { 
          reject();
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}