// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';
import * as ReactNavigationHooks from '@react-navigation/native';

// Under test file
import ArtistDetail from '../index';

// Mocks
jest.mock('@react-navigation/native');

describe('<ArtistDetail />', () => {
  let component: ShallowRendererProps;
  const navigation: any = {
    params: { id: 1 },
  };

  beforeEach(() => {
    jest.spyOn(ReactNavigationHooks, 'useRoute').mockReturnValue(navigation);
    component = shallow(<ArtistDetail />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
