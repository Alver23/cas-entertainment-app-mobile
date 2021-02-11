// Dependencies
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

import ListItem from '../index';

describe('<ListItem />', () => {
  let component: ShallowWrapper;

  const props = {
    onPress: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<ListItem {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the onPress void', () => {
    const onPress = component.find(TouchableOpacity).prop('onPress') as any;

    onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
});
