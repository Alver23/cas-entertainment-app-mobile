// Dependencies
import * as ReactRedux from 'react-redux';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Hooks
import * as stateActionHook from '@hooks/state-action';
import * as authHooks from '@hooks/auth';

// Navigation
import { AppStack } from '@navigation/app-stack';
import { AuthStack } from '@navigation/auth-stack';

// Containers
import { AppContainer } from '../index';
import { AppIntro } from '../../app-intro';

// Mocks
jest.mock('@navigation/auth-stack', () => ({ AuthStack: jest.fn() }));
jest.mock('@navigation/app-stack', () => ({ AppStack: jest.fn() }));

describe('AppContainer', () => {
  let component: ShallowWrapper;
  const callback = jest.fn();

  beforeEach(() => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue(callback);
    component = shallow(<AppContainer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show AppIntroContainer component when the user is not authenticated and slider component not show', () => {
    const mockState = [true, jest.fn(), jest.fn()];
    jest.spyOn(stateActionHook, 'useStateAction').mockReturnValue(mockState);
    component.setProps({});
    const appIntroContainer = component.find(AppIntro);

    const { onSkip } = appIntroContainer.props();
    onSkip();

    expect(mockState[2]).toHaveBeenCalled();

    expect(appIntroContainer.exists()).toBeTruthy();
  });

  it('should show AppStack navigation when the user is authenticated', () => {
    jest.spyOn(authHooks, 'useLocalSession').mockReturnValue({ authenticated: true });
    component.setProps({});
    expect(component.find(AppStack).exists()).toBeTruthy();
  });

  it('should show AuthStack navigation when the user is not authenticated', () => {
    jest.spyOn(authHooks, 'useLocalSession').mockReturnValue({ authenticated: false });
    const mockState = [false, jest.fn(), jest.fn()];
    jest.spyOn(stateActionHook, 'useStateAction').mockReturnValue(mockState);
    component.setProps({});
    expect(component.find(AuthStack).exists()).toBeTruthy();
  });
});
