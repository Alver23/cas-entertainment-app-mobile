// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SwitchSelector from 'react-native-switch-selector';

import Switch from '../index';

describe('<Switch />', () => {
  let component: ShallowWrapper;

  const props = {
    onPress: jest.fn(),
    options: [],
    initialOption: 0,
  };

  beforeEach(() => {
    component = shallow(<Switch {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onPress void', () => {
    const onPress: any = component.find(SwitchSelector).prop('onPress');
    onPress();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
