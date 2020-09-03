// Dependencies
import React from 'react';

export const useStateAction = (initialState?: boolean): [boolean, () => void, () => void] => {
  const [state, setState] = React.useState(!!initialState);
  const truthyCallback = React.useCallback((): void => setState(true), []);
  const falsyCallback = React.useCallback((): void => setState(false), []);
  return [state, truthyCallback, falsyCallback];
};
