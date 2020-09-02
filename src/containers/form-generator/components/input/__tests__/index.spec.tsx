// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import { InputForm } from '../index';

const MemoizeComponent = InputForm.type;

describe('InputForm', () => {
  let component: ShallowWrapper;

  const props = {
    placeholder: 'fake placeholder',
    onChangeText: jest.fn(),
    onBlur: jest.fn(),
    value: 'fake value',
    errorMessage: 'fake mssage',
  };

  beforeEach(() => {
    component = shallow(<MemoizeComponent {...props} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
