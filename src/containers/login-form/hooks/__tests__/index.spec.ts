// Dependencies
import { renderHook, act } from '@testing-library/react-hooks';

// Hooks
import * as appHooks from '@hooks/app-loader';
import * as stateHooks from '@hooks/state-action';

// Services
import { authenticationService } from '@services/authentication/authentication-service';

// Commons
import * as authCommons from '@commons/auth';

// Test file
import { useAuthentication } from '../index';

describe('LoginForm Hooks', () => {
  const loginMock = { data: { id: 1, user: 'fake name' } };
  const appLoaderMock = [jest.fn()];
  const stateActionMock = [false, jest.fn(), jest.fn()];
  const authData = jest.fn();

  beforeEach(() => {
    jest.spyOn(authenticationService, 'login').mockResolvedValue(loginMock);

    jest.spyOn(appHooks, 'useShowAppLoader').mockReturnValue(appLoaderMock);

    jest.spyOn(stateHooks, 'useStateAction').mockReturnValue(stateActionMock);

    jest.spyOn(authCommons, 'setAuthData').mockReturnValue(authData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should authenticate successfully', () => {
    const { result } = renderHook(() => useAuthentication());
    const fakeValues = { email: 'fake@fake.com', password: '123456789' };
    act(() => {
      result.current[1](fakeValues);
    });
    expect(appLoaderMock[0]).toHaveBeenCalledTimes(1);
  });

  it('should get an error when authenticating', () => {
    jest.spyOn(authenticationService, 'login').mockRejectedValue(new Error('fake errpr'));
    const { result } = renderHook(() => useAuthentication());
    const fakeValues = { email: 'fake@fake.com', password: '123456789' };
    act(() => {
      result.current[1](fakeValues);
    });
    expect(appLoaderMock[0]).toHaveBeenCalled();
  });
});
