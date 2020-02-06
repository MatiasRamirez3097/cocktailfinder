import {env} from 'react-native-dotenv'

const config = {
  api: {
    host: env.API_HOST,
    timeout: 20000
  }
};

const API_HOST = config.api.host;

export {
  API_HOST
}

export default config