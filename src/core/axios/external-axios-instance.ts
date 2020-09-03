// Dependencies
import axios, { AxiosInstance } from 'axios';

// Config
import config from '@config/index';

// Interceptors
import { responseInterceptor } from './interceptors/response-interceptor';

class ExternalAxiosInstance {
  private readonly http: AxiosInstance;

  constructor(configuration = {}) {
    this.http = axios.create(configuration);
  }

  instance(): AxiosInstance {
    this.http.interceptors.response.use(responseInterceptor());
    return this.http;
  }
}

export const externalAxiosInstance: AxiosInstance = new ExternalAxiosInstance({
  timeout: config.defaultTimeout,
  headers: { 'content-type': 'application/json' },
}).instance();
