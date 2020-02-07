import {URL_API} from 'react-native-dotenv';

const config = {
  api: {
    host: URL_API,
    timeout: 20000,
  },
};

export const API = config.api.host;
