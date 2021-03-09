// Hooks
import { useFetch } from '@hooks/use-fetch';

// Services
import { groupService } from '@services/group';

export const useGroupList = (groupIds: number[]) => {
  const initialState = {
    data: { items: [] },
  };

  const [
    {
      data: { items },
      loading,
    },
  ] = useFetch(
    () => {
      const searchParams = new URLSearchParams();
      groupIds.forEach((item) => {
        searchParams.append('groupId', (item as unknown) as string);
      });

      return groupService.get(searchParams);
    },
    [groupIds],
    initialState,
  );

  return [items, loading];
};
