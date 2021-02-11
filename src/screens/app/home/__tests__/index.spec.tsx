// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Hooks
import * as hooks from '@hooks/auth';

// Screen
import { HomeScreen } from '../index';

describe('HomeScreen', () => {
  let component: ShallowRendererProps;

  const mockState = {
    logout: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(hooks, 'useLocalSession').mockReturnValue(mockState);
    component = shallow(<HomeScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
