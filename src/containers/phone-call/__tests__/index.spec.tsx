// Dependencies
import React from 'react';
import call from 'react-native-phone-call';
import { Button } from 'react-native-elements';
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import PhoneCall from '../index';

// Mocks
jest.mock('react-native-phone-call', () => jest.fn());

describe('<PhoneCall />', () => {
  let component: ShallowWrapper;

  const props = {
    phoneNumber: 1234,
  };

  beforeEach(() => {
    component = shallow(<PhoneCall {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onPress void', () => {
    const onPress = component.find(Button).prop('onPress') as any;

    onPress();
    expect(call).toHaveBeenCalled();
  });
});
