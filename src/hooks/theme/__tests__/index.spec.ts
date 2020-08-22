// Dependencies
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useTheme, makeStyles } from '../index';

describe('Hooks Theme', () => {
  describe('useTheme', () => {
    it('should return the theme to use', () => {
      const {
        result: { current },
      } = renderHook(() => useTheme());
      expect(current.colors).toEqual(expect.any(Object));
    });
  });

  describe('makeStyles', () => {
    beforeEach(() => {
      jest.spyOn(React, 'useContext').mockReturnValue({ theme: '' });
      jest.spyOn(React, 'useMemo').mockReturnValue(jest.fn());
    });
    it('should get a function anonymous when sending arguments type object', () => {
      const {
        result: { current },
      } = renderHook(() => makeStyles({}));
      expect(current()).toEqual(expect.any(Function));
    });

    it('should get a function anonymous when sending arguments type function', () => {
      const {
        result: { current },
      } = renderHook(() => makeStyles(() => jest.fn()));
      expect(current()).toEqual(expect.any(Function));
    });
  });
});
