// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ActivityIndicator, StatusBar } from 'react-native';

// Components
import { LoaderView } from '../index';

const MemoizeComponent = LoaderView.type;

describe('LoaderView component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<MemoizeComponent />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(ActivityIndicator).exists()).toBeTruthy();

    expect(component.find(StatusBar).exists()).toBeTruthy();
  });
});
