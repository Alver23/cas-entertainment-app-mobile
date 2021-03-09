// Dependencies
import React from 'react';
import { Text } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import CardLarge from '../index';

describe('<CardLarge />', () => {
  let component: ShallowWrapper;

  const props = {};

  beforeEach(() => {
    component = shallow(<CardLarge {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
    expect(component.find(Text).exists()).toBeTruthy();
  });
});
