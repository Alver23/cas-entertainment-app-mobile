// Dependencies
import React from "react";
import { renderHook, act } from '@testing-library/react-hooks';

// Services
import { userService } from '@services/user';

// Hooks
import * as authHooks from '@hooks/auth';

// Test file
import { useUserProvider } from "../index";

// Mocks
jest.mock('jwt-decode', () => {
  return jest.fn()
    .mockReturnValue({
      sub: 1,
      email: 'fake',
      firstName: 'fake',
      lastName: 'fake',
      roles: [],
    })
});

describe('UserProvider Hooks', () => {

  const fakeToken = '12hdue742';
  const fakeReducer: [any, jest.Mock] = [
    { user: { id: 1, name: 'fake name' }},
    jest.fn(),
  ]
  beforeEach(() => {

    jest
      .spyOn(React, 'useEffect')
      .mockImplementation((callback) => callback());

    jest
      .spyOn(authHooks, 'useLocalSession')
      .mockReturnValue({ token: fakeToken });

    jest
      .spyOn(React, 'useReducer')
      .mockReturnValue(fakeReducer);

    jest
      .spyOn(userService, 'getMenus')
      .mockResolvedValue([]);


  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get the menus for user', () => {
    renderHook(() => useUserProvider());
    expect(fakeReducer[1]).toHaveBeenCalledTimes(2);
  });

  it('should get a error when call getMenus method', () => {
    jest
      .spyOn(userService, 'getMenus')
      .mockRejectedValue(new Error('fake error'));
    renderHook(() => useUserProvider());
    expect(fakeReducer[1]).toHaveBeenCalledTimes(2);
  });

  it('should call an one effect', () => {
    const reducer: [any, jest.Mock] = [
      {},
      jest.fn(),
    ]
    jest
      .spyOn(React, 'useReducer')
      .mockReturnValue(reducer);

    renderHook(() => useUserProvider());
    expect(fakeReducer[1]).not.toHaveBeenCalled();
  });

});
