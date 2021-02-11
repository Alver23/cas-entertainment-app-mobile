// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Screen
import { ArtistScreen } from '../index';

describe('<ArtistScreen />', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<ArtistScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
