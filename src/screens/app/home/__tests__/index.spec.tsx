// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Hooks
import * as hooks from '@hooks/authentication';

// Screen
import { HomeScreen } from '../index';

describe('AppStack', () => {
  let component: ShallowRendererProps;

  const mockState = {
    logout: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(hooks, 'useAuthentication').mockReturnValue(mockState);
    component = shallow(<HomeScreen />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
