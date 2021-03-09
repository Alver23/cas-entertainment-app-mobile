// Dependencies
import React, { ReactElement } from 'react';

import { useParamList } from '@hooks/params';

import Search from '@components/search-bar';

export const ArtistSearch = (): ReactElement => {
  const [, setParams, clearParams, initialParams] = useParamList();

  const seachCallback = React.useCallback(
    (text) => {
      if (!text) {
        clearParams();
      } else {
        setParams((prevState) => ({ ...prevState, ...initialParams, name: text }));
      }
    },
    [initialParams],
  );

  return <Search onPress={seachCallback} />;
};
