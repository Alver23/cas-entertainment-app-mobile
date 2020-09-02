// Dependencies
import Config from 'react-native-config';

const apiUrl: string = Config.API_BASE_URL;

export default {
  refreshToken: `${apiUrl}auth/token`,
  login: `${apiUrl}auth/login`,
};
