// Dependencies
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import { MemoizedCard } from '../index';

const MemoizedComponent = MemoizedCard.type;

describe('Card component', () => {
  let component: ShallowWrapper;

  const props = {
    backgroundImage: 'http://localhost/imgae.png',
    onPress: jest.fn(),
    text: 'fake text',
  };

  beforeEach(() => {
    component = shallow(<MemoizedComponent {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onPress void', () => {
    const onPress = component.find(TouchableOpacity).prop('onPress');

    onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
});
