// Dependencies
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useUserLocalSession } from '../index';

describe('UserLocalSession Hooks', () => {
  describe('useUserLocalSession', () => {
    it('should get context for user', () => {
      const mockData = { user: { name: 'fake name' } };
      jest.spyOn(React, 'useContext').mockReturnValue(mockData);
      const {
        result: { current },
      } = renderHook(() => useUserLocalSession());
      expect(current).toEqual(mockData);
    });
  });
});
