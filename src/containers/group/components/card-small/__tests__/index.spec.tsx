// Dependencies
import React from 'react';
import { Text } from 'react-native-elements';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import CardSmall from '../index';

// Mocks
import mocks from './mocks.json';

describe('<CardSmall />', () => {
  let component: ShallowWrapper;

  const props = { ...mocks };

  beforeEach(() => {
    component = shallow(<CardSmall {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
    expect(component.find(Text)).toHaveLength(2);
  });

  it('should render correctly when state is not null', () => {
    component.setProps({ ...mocks, state: 'active' });
    expect(component.find(Text)).toHaveLength(3);
  });
});
