import {API} from '../../config/index';

let _env = 'LC';
class Settings {
  static get apiRestEndpoint() {
    switch (_env) {
      case 'PROD':
        return '';
      case 'ST':
        return '';
      case 'DV':
        return '';
      case 'LC':
        return API;
      default:
        return API;
    }
  }

  static get environment() {
    return _env;
  }
}

module.exports = Settings;
