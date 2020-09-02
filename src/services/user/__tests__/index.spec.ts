// Dependencies
import RNSensitiveInfo from 'react-native-sensitive-info';

// Services
import { userService } from '../user-service';

describe('UserService', () => {
  describe('getUserInfo method', () => {
    it('should get the user data when exist in the local storage', () => {
      const mockData = { user: 123 };
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue(JSON.stringify(mockData));
      return userService.getUserInfo().then((response) => {
        expect(response).toEqual(mockData);
      });
    });
    it('should return undefined when not exist data in the local storage', () => {
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue('');
      return userService.getUserInfo().then((response) => {
        expect(response).toBeFalsy();
      });
    });
  });

  describe('getToken method', () => {
    it('should get token from local storage', () => {
      const mockData = { token: 123 };
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue(JSON.stringify(mockData));
      return userService.getToken().then((response) => {
        expect(response).toBe(mockData.token);
      });
    });

    it('should get token when not exist data in the local storage', () => {
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue('');
      return userService.getToken().then((response) => {
        expect(response).toBeFalsy();
      });
    });
  });

  describe('getRefreshToken method', () => {
    it('should get refreshToken from local storage', () => {
      const mockData = { refreshToken: 123 };
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue(JSON.stringify(mockData));
      return userService.getRefreshToken().then((response) => {
        expect(response).toBe(mockData.refreshToken);
      });
    });

    it('should get refreshToken when not exist data in the local storage', () => {
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue('');
      return userService.getRefreshToken().then((response) => {
        expect(response).toBeFalsy();
      });
    });
  });

  describe('setUserInfo method', () => {
    it('should set user data', () => {
      const mockData = { refreshToken: 123 };
      const spy = jest.spyOn(RNSensitiveInfo, 'setItem').mockResolvedValue('' as any);
      return userService.setUserInfo(mockData as any).then(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('clearUserInfo method', () => {
    it('should clear user data', () => {
      const spy = jest.spyOn(RNSensitiveInfo, 'deleteItem').mockResolvedValue('' as any);
      return userService.clearUserInfo().then(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
