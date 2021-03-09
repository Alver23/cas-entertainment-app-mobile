// Dependencies
import React from 'react';

// Hooks
import { useParamList } from '@hooks/params';

// Reducer
import { initialState, reducer, ACTIONS, IState } from '../reducer';

export const useInfiniteScroll = (fetcher: any): [IState, () => void, () => void] => {
  const [, setItems] = React.useState<Array<any>>([]);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const isMounted = React.useRef<boolean>(true);
  const hasNextPageRef = React.useRef<boolean>(true);
  const [params, setParams, , initialParams] = useParamList();
  const { name: filterName } = params;

  const updateItems = (newItems): void => {
    setItems((prevState) => {
      const buildItems = prevState.concat(newItems);
      dispatch({ type: ACTIONS.SET_DATA, payload: buildItems });
      return buildItems;
    });
  };

  const fetchData = (parameters): Promise<boolean> => {
    return new Promise((resolve) => {
      fetcher(parameters)
        .then((response) => {
          if (isMounted.current) {
            const { items: newItems, totalPages, totalItems: total } = response;
            const nextPage = parameters.page + 1;
            const hasPage = parameters.page !== totalPages;
            dispatch({ type: ACTIONS.SET_TOTAL_ITEMS, payload: total });
            hasNextPageRef.current = hasPage;
            updateItems(newItems);
            setParams((prevState) => ({
              ...prevState,
              page: nextPage,
            }));
            resolve(false);
          }
        })
        .catch((error: Error) => {
          if (isMounted.current) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: error });
          }
          resolve(false);
        });
    });
  };

  const handleLoadMore = React.useCallback((): void => {
    if (hasNextPageRef.current) {
      dispatch({ type: ACTIONS.SET_LOADER, property: 'loading', payload: true });
      fetchData(params).finally(() => {
        dispatch({ type: ACTIONS.SET_LOADER, property: 'loading', payload: false });
      });
    }
  }, [params]);

  const initialFetch = React.useCallback((propertyAction = 'refreshing', newParams = {}) => {
    setItems([]);
    dispatch({ type: ACTIONS.SET_LOADER, property: propertyAction, payload: true });
    const buildParams = { ...params, ...initialParams, ...newParams };
    setParams(buildParams);
    return fetchData(buildParams).finally(() => {
      dispatch({ type: ACTIONS.SET_LOADER, property: propertyAction, payload: false });
    });
  }, []);

  React.useEffect(
    (): (() => void) => (): void => {
      isMounted.current = false;
    },
    [],
  );

  React.useEffect(() => {
    (async () => {
      dispatch({ type: ACTIONS.SET_LOADER, property: 'initLoading', payload: true });
      await initialFetch();
      dispatch({ type: ACTIONS.SET_LOADER, property: 'initLoading', payload: false });
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (filterName) {
        await initialFetch('initLoading', { name: filterName });
      }
    })();
  }, [filterName]);

  return [state, initialFetch, handleLoadMore];
};
