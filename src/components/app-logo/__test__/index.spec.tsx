// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Image } from 'react-native';

// Components
import { AppLogoView } from '../index';

const MemoizeComponent = AppLogoView.type;

describe('AppLogoView component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<MemoizeComponent />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(Image).exists()).toBeTruthy();
  });
});
