// Dependencies
import RNRestart from 'react-native-restart';
import axios, { AxiosError, AxiosResponse } from 'axios';

// Config
import endpoints from '@config/endpoints';

// Commons
import { setAuthData, getRefreshToken, clearAuthData } from "@commons/auth";

export const refresTokenInterceptor = (): any => async (error: AxiosError) => {
  const originalRequest: any = error.config;
  const { response = { status: 500 } } = error;
  const { status = 503 } = response;
  if (status === 401) {
    if (originalRequest.retry) {
      await clearAuthData();
      return RNRestart.Restart();
    }
    try {
      const uri = endpoints.refreshToken;
      originalRequest.retry = true;
      const refreshToken = await getRefreshToken();
      const { data: responseUser } = await axios.post(uri, { refreshToken });
      const responseRefreshToken = responseUser.data;
      await setAuthData(responseRefreshToken);
      originalRequest.headers.Authorization = `Bearer ${responseRefreshToken.token}`;
      return axios(originalRequest).then((res: AxiosResponse) => res.data);
    } catch (e) {
      await clearAuthData();
      return RNRestart.Restart();
    }
  }
  return Promise.reject(error);
};
