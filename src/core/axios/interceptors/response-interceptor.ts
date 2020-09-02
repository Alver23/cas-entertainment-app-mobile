// Dependencies
import { AxiosResponse } from 'axios';

export const responseInterceptor = (): void => (response: AxiosResponse) => response.data;
