// Dependencies
import React, { Dispatch } from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Services
import { userService } from '@services/user/user-service';

// Hooks
import { useAuth } from '../index';

// Mocks
jest.mock('@services/user/user-service');

describe('Auth Provider Hooks', () => {
  const userMock = { user: { name: 'fake name' } };
  describe('useAuth', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should get the data of an authenticated user', async () => {
      userService.getUserInfo.mockResolvedValue(userMock);
      const { result, waitForNextUpdate } = renderHook(() => useAuth());
      await waitForNextUpdate();
      expect(result.current).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            user: expect.any(Object),
          }),
          expect.any(Function),
        ]),
      );
    });

    it('should get an error when the user not exist and initialize state', () => {
      const mockState: [{}, Dispatch<() => void>] = [null, jest.fn()];
      userService.getUserInfo.mockRejectedValue(new Error('fake error'));
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      const { result } = renderHook(() => useAuth());
      expect(result.current).toEqual(expect.arrayContaining([null, expect.any(Function)]));
    });

    it('should get the data of an authenticated user when the component is not mounted', () => {
      const mockState: [{}, Dispatch<() => void>] = [{}, jest.fn()];
      userService.getUserInfo.mockResolvedValue(userMock);
      jest.spyOn(React, 'useRef').mockReturnValue({ current: false });
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      renderHook(() => useAuth());
      expect(mockState[1]).not.toHaveBeenCalled();
    });

    it('should get an error when the user not exist and not initialize state', () => {
      const mockState: [{}, Dispatch<() => void>] = [{}, jest.fn()];
      userService.getUserInfo.mockRejectedValue(new Error('fake error'));
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      renderHook(() => useAuth());
      expect(mockState[1]).not.toHaveBeenCalled();
    });

    it('should call the logout callback whe the user is authenticate', () => {
      const mockState: [{}, Dispatch<() => void>] = [{}, jest.fn()];
      userService.getUserInfo.mockResolvedValue(userMock);
      userService.clearUserInfo.mockResolvedValue(null);
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      const {
        result: { current },
      } = renderHook(() => useAuth());
      const [, logout] = current;
      logout();
      expect(mockState[1]).toHaveBeenCalled();
    });
  });
});
