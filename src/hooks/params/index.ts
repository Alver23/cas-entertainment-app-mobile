// Dependencies
import React from 'react';

// Models
import { IParamList } from '@models/list';

// Contexts
import { ParamListContext } from '@contexts/params';

type InitializeParamListType = [IParamList, (value: ((prevState) => IParamList) | IParamList) => void, () => void, IParamList];

export const useInitializeParamList = (): InitializeParamListType => {
  const initialState: IParamList = {
    limit: 10,
    page: 1,
  };

  const [params, setParams] = React.useState(initialState);

  const clearFilters = React.useCallback((): void => {
    setParams(initialState);
  }, []);

  return [params, setParams, clearFilters, initialState];
};

export const useParamList = () => {
  return React.useContext<IParamList>(ParamListContext);
};
