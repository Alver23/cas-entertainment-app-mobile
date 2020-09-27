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

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
