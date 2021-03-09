// Dependencies
import Config from 'react-native-config';

const apiUrl: string = Config.API_BASE_URL;

export default {
  refreshToken: `${apiUrl}auth/refresh-token`,
  login: `${apiUrl}/auth/login`,
  user: {
    menus: `${apiUrl}users/:id/menus`,
  },
  artist: {
    get: `${apiUrl}artists`,
    getById: `${apiUrl}artists/:id`,
    updateById: `${apiUrl}artists/:id`,
  },
  group: {
    get: `${apiUrl}groups`,
  },
};
