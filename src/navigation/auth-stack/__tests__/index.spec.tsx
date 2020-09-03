// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Navigation
import { AuthStack } from '../index';

describe('AuthStack', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<AuthStack />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
