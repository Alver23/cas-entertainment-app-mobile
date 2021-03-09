// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Avatar, Text } from 'react-native-elements';

// Under test file
import Profile from '../index';

describe('<Profile />', () => {
  let component: ShallowWrapper;
  const props = {
    title: 'fake title',
    description: 'fake description',
    avatarProps: {
      title: 'fake title',
    },
  };

  beforeEach(() => {
    component = shallow(<Profile {...props} />);
  });

  it('should render correctly', () => {
    expect(component.find(Avatar).exists()).toBeTruthy();
    expect(component.find(Text)).toHaveLength(2);
  });
});
