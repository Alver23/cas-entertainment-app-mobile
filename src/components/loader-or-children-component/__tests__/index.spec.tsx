// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Text } from 'react-native';

// Components
import Loading from '@components/loading';

// Under test file
import LoaderOrChildrenComponent from '../index';

describe('<LoaderOrChildrenComponent />', () => {
  let component: ShallowWrapper;

  const props = {
    loading: false,
    children: <Text />,
  };

  beforeEach(() => {
    component = shallow(<LoaderOrChildrenComponent {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly when loading is false', () => {
    expect(component.find(Text).exists()).toBeTruthy();
  });

  it('should render correctly when loading is true', () => {
    component.setProps({ ...props, loading: true });
    expect(component.find(Loading).exists()).toBeTruthy();
  });
});
