// Test file
import { userService } from '../index';

// Mocks
jest.mock('@config/endpoints', () => ({
  user: {
    menus: 'fake-url',
  }
}));

jest.mock('@core/connector', () => ({
  connector: {
    get: jest.fn()
      .mockResolvedValue({ data: {} })
  }
}));

describe('UserService', () => {

  describe('getMenus method', () => {
    it('should get the menus by user', async () => {
      const response = await userService
        .getMenus(1);

      expect(response).toEqual(expect.any(Object));
    });
  });

});
