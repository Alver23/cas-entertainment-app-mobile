// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Loading from '../index';

describe('<Loading />', () => {
  let component: ShallowWrapper;

  const props = {};

  beforeEach(() => {
    component = shallow(<Loading {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
