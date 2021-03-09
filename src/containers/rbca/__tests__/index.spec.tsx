// Dependencies
import React from 'react';
import { Text } from 'react-native-elements';
import { shallow } from 'enzyme';

// Hooks
import * as userHooks from '@hooks/user';

// Under test file
import withRoleAllowed from '../index';

describe('WithRoleAllowed', () => {
  const FakeComponent = () => <Text>fake test</Text>;
  const allowedRoles = ['Admin'];
  const props = { id: 1 };

  beforeEach(() => {
    jest.spyOn(userHooks, 'useUserLocalSession').mockReturnValue({ user: { roles: ['Admin'] } });
  });

  it('should render correctly when have a valid role', () => {
    const ComponentToRender = withRoleAllowed(FakeComponent, allowedRoles);
    const component = shallow(<ComponentToRender {...props} />);
    expect(component.props()).toEqual(props);
  });

  it('should render correctly when have a invalid role', () => {
    const AlternateView = () => (
      <>
        <Text>loading</Text>
      </>
    );
    const ComponentToRender = withRoleAllowed(FakeComponent, ['fake role'], AlternateView);
    const component: any = shallow(<ComponentToRender {...props} />);
    expect(component.type().name).toBe('AlternateView');
  });

  it('should render correctly when have a invalid roles and alternateView is null', () => {
    const ComponentToRender = withRoleAllowed(FakeComponent, ['fake role']);
    const component: any = shallow(<ComponentToRender {...props} />);
    expect(component.type()).toBeFalsy();
  });
});
