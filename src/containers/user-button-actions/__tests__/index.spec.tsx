// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import UserButtonActions from '../index';

describe('<UserButtonActions />', () => {
  let component: ShallowWrapper;

  const props = {
    onEdit: jest.fn(),
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<UserButtonActions {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
