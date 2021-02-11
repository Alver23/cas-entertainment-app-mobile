// Dependencies
import React from 'react';
import { Text } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import { LoaderView } from '@components/loader';

// Hooks
import * as UserProviderHooks from "./../hooks";

// Test file
import { UserProvider } from './../index';

describe('<UserProvider />', () => {
  let component: ShallowWrapper;

  const userProviderMock: [any] = [
    {user: {}, menus: [], errors: undefined, loading: true }
  ]
  const props = {
    children: <Text />,
  };

  beforeEach(() => {
    jest
      .spyOn(UserProviderHooks, 'useUserProvider')
      .mockReturnValue(userProviderMock);
    component = shallow(<UserProvider {...props} />);
  });

  afterEach(() => {
    jest
      .clearAllMocks();
  });

  it('should render correctly when loading is true', () => {
    expect(component.find(LoaderView).exists())
      .toBeTruthy();
  });

  it('should render correctly when loading is false', () => {
    const mock: [any] = [
      {...userProviderMock[0], loading: false}
    ]

    jest
      .spyOn(UserProviderHooks, 'useUserProvider')
      .mockReturnValue(mock);

    component.setProps({ ...props });

    expect(component.find(Text).exists())
      .toBeTruthy();
  });

});
