// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';
import * as ReactNavigationHooks from '@react-navigation/native';

// Screen
import { ArtistScreen } from '../index';

// Mocks
jest.mock('@react-navigation/native');

describe('<ArtistScreen />', () => {
  let component: ShallowRendererProps;
  const navigation: any = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(ReactNavigationHooks, 'useNavigation').mockReturnValue(navigation);

    jest.spyOn(React, 'useCallback').mockImplementation((callback) => callback());
    component = shallow(<ArtistScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
