// Dependencies
import React from 'react';
import { Button } from 'react-native-elements';
import { shallow, ShallowWrapper } from 'enzyme';

import ButtonAction from '../index';

describe('<ButtonAction />', () => {
  let component: ShallowWrapper;

  const props = {
    title: 'fake title',
    onPress: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<ButtonAction {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the onPress void', () => {
    const onPress = component.find(Button).prop('onPress') as any;

    onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
});
