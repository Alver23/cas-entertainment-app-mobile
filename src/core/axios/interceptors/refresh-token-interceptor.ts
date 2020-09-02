// Dependencies
import RNRestart from 'react-native-restart';
import axios, { AxiosError, AxiosResponse } from 'axios';

// Config
import { endpoints } from '@config/index';

// Services
import { userService } from '@services/user/user-service';

export const refresTokenInterceptor = (): any => async (error: AxiosError) => {
  const originalRequest: any = error.config;
  const { response = { status: 500 } } = error;
  const { status = 503 } = response;
  if (status === 401) {
    if (originalRequest.retry) {
      return RNRestart.Restart();
    }
    try {
      const uri = endpoints.refreshToken;
      const refreshToken = await userService.getRefreshToken();
      originalRequest.retry = true;
      const { data: responseUser } = await axios.post(uri, { refreshToken });
      const user = responseUser.data;
      await userService.setUserInfo(user);
      originalRequest.headers.Authorization = `Bearer ${user.token}`;
      return axios(originalRequest).then((res: AxiosResponse) => res.data);
    } catch (e) {
      return RNRestart.Restart();
    }
  }
  return Promise.reject(error);
};
