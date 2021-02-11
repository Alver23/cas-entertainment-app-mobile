// Dependencies
import React, { Dispatch } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchBar, Button } from 'react-native-elements';

import Search from '../index';

describe('<Search />', () => {
  let component: ShallowWrapper;

  const mockState: [unknown, Dispatch<Function>] = [null, jest.fn()];
  const props = {
    placeholder: 'placeholder',
    buttonTitle: 'buttonTitle',
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockReturnValue(mockState);
    component = shallow(<Search {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onChangeText void', () => {
    const onChangeText = component.find(SearchBar).prop('onChangeText') as any;
    const mockText = 'fake test';
    onChangeText(mockText);
    expect(mockState[1]).toHaveBeenCalledWith(mockText);
  });

  it('should call the onPress void', () => {
    const onPress = component.find(Button).prop('onPress') as any;

    onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
});
