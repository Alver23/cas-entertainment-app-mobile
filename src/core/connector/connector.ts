// Dependencies
import { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

// axios
import { internalAxiosInstance } from '../axios/axios-instance';

// Connector
import { connectorError } from './connector-error';

export class Connector {
  constructor(private readonly http: AxiosInstance) {}

  public get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http
        .get<T>(url, config)
        .then((response: any) => resolve(response))
        .catch((error: AxiosError) => reject(connectorError(error)));
    });
  }

  public post<T>(url: string, body: any = {}, config: AxiosRequestConfig = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http
        .post(url, body, config)
        .then((response: any) => resolve(response))
        .catch((error: AxiosError) => reject(connectorError(error)));
    });
  }

  public put<T>(url: string, body, config: AxiosRequestConfig = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http
        .put(url, body, config)
        .then((response: any) => resolve(response))
        .catch((error: AxiosError) => reject(connectorError(error)));
    });
  }

  public delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http
        .delete(url, config)
        .then((response: any) => resolve(response))
        .catch((error: AxiosError) => reject(connectorError(error)));
    });
  }
}

export const connector = new Connector(internalAxiosInstance);
