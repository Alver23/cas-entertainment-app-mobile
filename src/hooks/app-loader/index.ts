// Dependencies
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Redux Actions
import { appShowLoaderAction } from '@store/actions/globals';

export const useShowAppLoader = () => {
  const dispatch = useDispatch();
  const callback = useCallback((show) => {
    return dispatch(appShowLoaderAction(show));
  }, []);

  return [callback];
};
