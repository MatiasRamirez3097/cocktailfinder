import {API_HOST} from 'react-native-dotenv'

const config = {
  api: {
    host: API_HOST,
    timeout: 20000
  }
};

const API = config.api.host;

export {
  API
}

export default config