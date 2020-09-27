// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Navigation
import { AppStack } from '../index';

describe('AppStack', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<AppStack />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
