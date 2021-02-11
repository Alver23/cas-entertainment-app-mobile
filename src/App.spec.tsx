// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Containers
import App from './App';

// Mocks
jest.mock('./store', () => jest.fn());
jest.mock('./core/tools/reactotron', () => jest.fn());
jest.mock('./containers/app', () => ({ AppContainer: jest.fn() }));
jest.mock('./containers/auth-provider', () => ({ AuthProvider: jest.fn() }));

describe('App Component', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
