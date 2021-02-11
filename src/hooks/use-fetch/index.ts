// Dependencies
import React from 'react';

// Reducers
import { fetchReducer, initialState, CONSTANTS, IState } from './reducer';

export const useFetch = (callback: Promise<any>, dependencies: Array<any>, initialValues: any = {}): [IState, () => void] => {
  const values = {
    ...initialState,
    ...initialValues,
  };

  const [state, dispatch] = React.useReducer(fetchReducer, values);

  const isMounted = React.useRef(true);

  React.useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  const memoizeCallback = React.useCallback(async () => {
    return (await callback)();
  }, dependencies);
  const fetch = React.useCallback(() => {
    dispatch({ type: CONSTANTS.SET_LOADING, payload: true });
    memoizeCallback()
      .then((response) => {
        if (isMounted.current) {
          dispatch({ type: CONSTANTS.SET_DATA, payload: response });
        }
      })
      .catch((error: any) => {
        dispatch({ type: CONSTANTS.SET_ERROR, payload: error });
      })
      .finally(() => {
        dispatch({ type: CONSTANTS.SET_LOADING, payload: false });
      });
  }, [memoizeCallback]);

  React.useEffect(fetch, dependencies);

  return [state, fetch];
};
