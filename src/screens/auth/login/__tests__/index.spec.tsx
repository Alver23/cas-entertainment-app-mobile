// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Screens
import { LoginScreen } from '../index';

// Mocks
jest.mock('@containers/login-form', () => ({ LoginForm: jest.fn() }));

describe('LoginScreen', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<LoginScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
