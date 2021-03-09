// Dependencies
import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import Switch from '@components/switch';

// Test file
import ProfileSection from '../index';

// Mocks
import mocks from './mocks.json';

describe('<ProfileSection />', () => {
  let component: ShallowWrapper;

  const mock = jest.fn();
  const props: any = {
    user: mocks,
  };

  beforeEach(() => {
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mock);
    component = shallow(<ProfileSection {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const onPress: any = component.find(Switch).prop('onPress');

    onPress();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
