// Dependencies
import RNSensitiveInfo from 'react-native-sensitive-info';

// Test file
import { setAuthData, clearAuthData, getRefreshToken, getToken } from '../index';

describe('Auth commons', () => {
  describe('getToken method', () => {
    it('should get token from local storage', () => {
      const mockData = { token: 123 };
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue(JSON.stringify(mockData));
      return getToken().then((response) => {
        expect(response).toBe(mockData.token);
      });
    });

    it('should get token when not exist data in the local storage', () => {
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue('');
      return getToken().then((response) => {
        expect(response).toBeFalsy();
      });
    });
  });

  describe('getRefreshToken method', () => {
    it('should get refreshToken from local storage', () => {
      const mockData = { refreshToken: 123 };
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue(JSON.stringify(mockData));
      return getRefreshToken().then((response) => {
        expect(response).toBe(mockData.refreshToken);
      });
    });

    it('should get refreshToken when not exist data in the local storage', () => {
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue('');
      return getRefreshToken().then((response) => {
        expect(response).toBeFalsy();
      });
    });
  });

  describe('setAuthData method', () => {
    it('should set user data', () => {
      const mockData = { refreshToken: 123 };
      const spy = jest.spyOn(RNSensitiveInfo, 'setItem').mockResolvedValue('' as any);
      return setAuthData(mockData as any).then(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('clearAuthData method', () => {
    it('should clear user data', () => {
      const spy = jest.spyOn(RNSensitiveInfo, 'deleteItem').mockResolvedValue('' as any);
      return clearAuthData().then(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
