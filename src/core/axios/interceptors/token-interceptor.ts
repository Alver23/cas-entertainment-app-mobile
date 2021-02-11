// Dependencies
import { AxiosRequestConfig } from 'axios';

// Commons
import { getToken } from '@commons/auth';

export const headerAsBearerTokenInterceptor = () => async (requestConfig: AxiosRequestConfig) => {
  const token = await getToken();
  const headers = {
    ...requestConfig.headers,
    Authorization: `Bearer ${token}`,
  };

  return { ...requestConfig, headers };
};
