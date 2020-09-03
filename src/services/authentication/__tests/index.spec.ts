// Core
import { externalAxiosInstance } from '@core/axios';

// Services
import { authenticationService } from '../authentication-service';

// Mocks
jest.mock('@config/endpoints', () => ({ login: 'fake-url' }));
jest.mock('@core/axios', () => ({
  externalAxiosInstance: { post: jest.fn() },
}));

describe('AuthenticationService', () => {
  describe('login method', () => {
    it('should get the user data and token when user is valid', () => {
      const mockData = { user: 'fake' };
      jest.spyOn(externalAxiosInstance, 'post').mockResolvedValue(mockData);
      return authenticationService.login({ email: 'fake', password: 'fake' }).then((response) => {
        expect(response).toEqual(mockData);
      });
    });
  });
});
