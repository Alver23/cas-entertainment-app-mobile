// Dependencies
import { AxiosRequestConfig } from 'axios';

// Services
import { userService } from '@services/user/user-service';

export const headerAsBearerTokenInterceptor = () => async (requestConfig: AxiosRequestConfig) => {
  const token = await userService.getToken();
  const headers = {
    ...requestConfig.headers,
    Authorization: `Bearer ${token}`,
  };
  return {
    ...requestConfig,
    ...headers,
  };
};
