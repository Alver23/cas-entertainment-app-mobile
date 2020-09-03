// Dependencies
import React from 'react';

export const useDidMount = (callback: () => void): void => {
  return React.useEffect(callback, []);
};
