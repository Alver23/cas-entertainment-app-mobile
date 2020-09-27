// Dependencies
import React, { PropsWithChildren } from 'react';
import { Formik } from 'formik';
import { shallow, ShallowWrapper } from 'enzyme';

// Models
import { IField } from '../models/form-generator-interface';

// Containers
import { FormGenerator } from '../index';

// Mocks
import mocks from './mocks.json';

describe('FormGenerator', () => {
  let component: ShallowWrapper<PropsWithChildren<any>>;

  const fields: IField[] = mocks;

  const formikProps = {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    touched: {
      email: true,
    },
    errors: {
      email: 'fake error',
    },
  };

  const props = {
    fields,
    onSubmit: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<FormGenerator {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render inputs correctly', () => {
    const { children } = component.find(Formik).props();

    children(formikProps);
  });
});
