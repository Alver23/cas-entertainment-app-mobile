// Dependencies
import axios, { AxiosInstance } from 'axios';

// Config
import { defaultTimeout } from '@config/index';

// Interceptors
import { responseInterceptor } from './interceptors/response-interceptor';
import { refresTokenInterceptor } from './interceptors/refresh-token-interceptor';
import { headerAsBearerTokenInterceptor } from './interceptors/token-interceptor';

class InternalAxiosInstance {
  private readonly http: AxiosInstance;

  constructor(config = {}) {
    this.http = axios.create(config);
  }

  instance(): AxiosInstance {
    this.http.interceptors.request.use(headerAsBearerTokenInterceptor());
    this.http.interceptors.response.use(responseInterceptor(), refresTokenInterceptor());
    return this.http;
  }
}

export const internalAxiosInstance: AxiosInstance = new InternalAxiosInstance({
  timeout: defaultTimeout,
  headers: { 'content-type': 'application/json' },
}).instance();
