import { APIConnector } from "../base/index";
import config from "../../config/index";

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ServiceConfig {
  //static props: any;
  static get endpoint ()
  {
      return config.api.host;
  }

  static get drinks() {
    return `${ServiceConfig.endpoint}`;
  }

  static get APIConnector() {
    return apiConnector;
  }
}