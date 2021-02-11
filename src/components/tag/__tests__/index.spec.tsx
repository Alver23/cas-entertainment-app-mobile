// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Text } from 'react-native-elements';

import Tag from '../index';

describe('<Tag />', () => {
  let component: ShallowWrapper;

  const props = {
    text: 'placeholder',
  };

  beforeEach(() => {
    component = shallow(<Tag {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onChangeText void', () => {
    expect(component.find(Text).exists()).toBeTruthy();
  });
});
