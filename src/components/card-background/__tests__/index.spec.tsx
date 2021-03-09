// Dependencies
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import CardBackground from '../index';

describe('<CardBackground />', () => {
  let component: ShallowWrapper;

  const props = {
    backgroundImage: 'http://localhost/imgae.png',
    onPress: jest.fn(),
    text: 'fake text',
  };

  beforeEach(() => {
    component = shallow(<CardBackground {...props} />);
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
