// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Containers
import App from './App';

// Mocks
jest.mock('./containers/app', () => ({ AppContainer: jest.fn() }));
jest.mock('./containers/auth-provider', () => ({ AuthProvider: jest.fn() }));

describe('App Component', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
