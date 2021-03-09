// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import GroupList from '../index';

// Components
import CardSmall from '../components/card-small';

// Hooks
import * as groupHooks from '../hooks';

// Mocks
import mocks from './mocks.json';

describe('<GroupList />', () => {
  let component: ShallowWrapper;

  const props = {
    groupIds: mocks.groupIds,
  };

  const mockHook = [mocks.groupList, false];

  beforeEach(() => {
    jest.spyOn(groupHooks, 'useGroupList').mockReturnValue(mockHook);

    component = shallow(<GroupList {...props} />);
  });

  it('should render correctly when loading is false', () => {
    const cardSmallProps = component.find(CardSmall).props();

    expect(cardSmallProps).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        description: expect.any(String),
        state: expect.any(String),
      }),
    );
  });
});
