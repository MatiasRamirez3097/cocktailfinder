import { APIConnector } from "..";
import config from "../../config/index";

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ServiceConfig {
  //static props: any;
  static get endpoint ()
  {
      return `${config.API_HOST}`;
  }

  static get drinks() {
    return `${ServiceConfig.endpoint}`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}