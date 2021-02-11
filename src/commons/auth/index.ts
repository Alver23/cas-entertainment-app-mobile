// Dependencies
import RNSensitiveInfo from 'react-native-sensitive-info';

import { IAuthData } from "@models/auth-interface";

export const AUTH_KEY = 'auth-data';

export const setAuthData = (data: IAuthData) => {
  return RNSensitiveInfo.setItem(AUTH_KEY, JSON.stringify(data), {});
}

export const getAuthData = async (): Promise<IAuthData> => {
  const data = await RNSensitiveInfo.getItem(AUTH_KEY, {});
  return data && JSON.parse(data)
}

export const getToken = async(): Promise<string | undefined> => {
  const { token } = (await getAuthData()) || {};
  return token;
}

export const getRefreshToken = async (): Promise<string> => {
  const { refreshToken } = (await getAuthData()) || {};
  return refreshToken;
}

export const clearAuthData = (): Promise<string> => {
  return RNSensitiveInfo.deleteItem(AUTH_KEY, {});
}
