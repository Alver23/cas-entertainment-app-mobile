// Dependencies
import React from 'react';
import { Text } from 'react-native-elements';
import { shallow, ShallowWrapper } from 'enzyme';

// Containers
import { FormGenerator } from '../../form-generator';
import { LoginForm } from '../index';

// Hooks
import * as authenticationHooks from "../hooks";

jest.mock('@services/authentication/authentication-service');

describe('LoginForm', () => {
  let component: ShallowWrapper;
  const authenticationMock: [any, jest.Mock] = [{}, jest.fn()];

  beforeEach(() => {
    jest
      .spyOn(authenticationHooks, 'useAuthentication')
      .mockReturnValue(authenticationMock);
    component = shallow(<LoginForm />);
  });

  afterEach(() => {

    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onSubmit method but should return error', async () => {
    await component.find(FormGenerator).props().onSubmit();
    expect(authenticationMock[1]).toHaveBeenCalledTimes(1);
    expect(component.find(Text).exists()).toBeTruthy();
  });
});
