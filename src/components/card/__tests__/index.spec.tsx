// Dependencies
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Config
import { STATUS_TYPES } from '../config';

// Components
import Card from '../index';

describe('Card component', () => {
  let component: ShallowWrapper;

  const props = {
    status: STATUS_TYPES.BLUE,
    onPress: jest.fn(),
    children: <></>,
  };

  beforeEach(() => {
    component = shallow(<Card {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onPress void', () => {
    const onPress = component.find(TouchableOpacity).prop('onPress') as any;

    onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
});
