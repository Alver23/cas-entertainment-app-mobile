// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import ListItem from '@components/list-item';

// Test file
import Item from '../index';

// Mocks
import mocks from './mocks.json';

describe('<Item />', () => {
  let component: ShallowWrapper;

  const props: any = {
    item: mocks,
    onPress: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Item {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly when the user is active', () => {
    const onPress: any = component.find(ListItem).prop('onPress');

    onPress();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('should render correctly when the user is inactive', () => {
    component.setProps({ ...props, item: { ...props.item, active: false } });
    const rightContainer: any = component.find(ListItem).prop('rightContainer');

    const {
      props: { text },
    } = rightContainer;
    expect(text).toEqual(expect.any(String));
  });
});
