// Dependencies
import * as ReactRedux from 'react-redux';
import React, { Dispatch } from 'react';
import { Text } from 'react-native-elements';
import { shallow, ShallowWrapper } from 'enzyme';

// Hooks
import * as hooks from '@hooks/state-action';

// Services
import { userService } from '@services/user/user-service';
import { authenticationService } from '@services/authentication/authentication-service';

// Containers
import { FormGenerator } from '../../form-generator';
import { LoginForm } from '../index';

jest.mock('@services/authentication/authentication-service');

describe('LoginForm', () => {
  let component: ShallowWrapper;
  const callback = jest.fn();

  beforeEach(() => {
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(callback);
    component = shallow(<LoginForm />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onSubmit method but should return error', async () => {
    jest.spyOn(authenticationService, 'login').mockRejectedValue({ error: {} });

    await component.find(FormGenerator).props().onSubmit();

    expect(component.find(Text).exists()).toBeTruthy();
  });

  it('should call the onSubmit method when the form is valid', async () => {
    const mockState: [boolean, Dispatch<() => void>, Dispatch<() => void>] = [false, jest.fn(), jest.fn()];
    jest.spyOn(hooks, 'useStateAction').mockReturnValue(mockState);
    jest.spyOn(authenticationService, 'login').mockResolvedValue({ data: {} });
    const userServiceSpy = jest.spyOn(userService, 'setUserInfo').mockResolvedValue({});
    component = shallow(<LoginForm />);
    await component.find(FormGenerator).props().onSubmit();

    expect(userServiceSpy).toHaveBeenCalled();
  });
});
