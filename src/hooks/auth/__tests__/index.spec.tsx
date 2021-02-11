// Dependencies
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useLocalSession } from '../index';

describe('Local Session Hooks', () => {
  describe('useLocalSession', () => {
    it('should get context for authentication', () => {
      const mockData = { user: { name: 'fake name' } };
      jest.spyOn(React, 'useContext').mockReturnValue(mockData);
      const {
        result: { current },
      } = renderHook(() => useLocalSession());
      expect(current).toEqual(mockData);
    });
  });
});
