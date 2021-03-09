// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import * as ReactNavigationHooks from '@react-navigation/native';

// Hooks
import * as userHooks from '@hooks/user';

// Components
import CardBackground from '@components/card-background';

import { MenuItems } from '../index';

// Mocks
import mocks from './mocks.json';

jest.mock('@react-navigation/native');

describe('Menu Items container', () => {
  let component: ShallowWrapper;

  const navigation: any = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(ReactNavigationHooks, 'useNavigation').mockReturnValue(navigation);
    jest.spyOn(userHooks, 'useUserLocalSession').mockReturnValue(mocks);
    component = shallow(<MenuItems />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should navigate to screen when on press menu item', () => {
    const onPress: jest.Mock = component.find(CardBackground).first().prop('onPress');
    onPress();
    expect(navigation.navigate).toHaveBeenCalled();
  });
});
