import {URL_API} from 'react-native-dotenv'

const config = {
  api: {
    host: URL_API,
    timeout: 20000
  }
};

const API = config.api.host;

export {
  API
}

export default config.api.URL_API