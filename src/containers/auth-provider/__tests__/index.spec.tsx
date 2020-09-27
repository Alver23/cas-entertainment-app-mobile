// Dependencies
import React, { PropsWithChildren, ReactElement } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import { LoaderView } from '@components/loader';

// Hooks
import * as hooks from '../hooks';

// Components
import { AuthProvider } from '../index';

describe('AuthProvider', () => {
  let component: ShallowWrapper<PropsWithChildren<any>>;

  const FakeComponent = (): ReactElement => <></>;

  beforeEach(() => {
    component = shallow(
      <AuthProvider>
        <FakeComponent />
      </AuthProvider>,
    );
  });

  it('should render correctly when not initialize authentication', () => {
    expect(component.find(LoaderView).exists()).toBeTruthy();
  });

  it('should save a snapshot of the component', () => {
    const mockState: [Record<string, boolean>, () => void] = [{ initialize: true }, jest.fn()];
    jest.spyOn(hooks, 'useAuth').mockReturnValue(mockState);
    component.setProps({});
    const {
      children: { type },
    } = component.props();
    expect(type()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
