// Dependencies
import { renderHook } from '@testing-library/react-hooks';

// Services
import { groupService } from '@services/group';

// Under test file
import { useGroupList } from '../index';

describe('groupHooks', () => {
  const groupIds = [1, 2];
  const groupListMock = { items: [{ id: 1 }] };

  beforeEach(() => {
    jest.spyOn(groupService, 'get').mockResolvedValue(groupListMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get group list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGroupList(groupIds));
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(groupListMock.items);
    expect(result.current[1]).toBeFalsy();
  });
});
