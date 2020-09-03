// Dependencies
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useAuthentication } from '../index';

describe('Authentication Hooks', () => {
  describe('useAuthentication', () => {
    it('should get context for authentication', () => {
      const mockData = { user: { name: 'fake name' } };
      jest.spyOn(React, 'useContext').mockReturnValue(mockData);
      const {
        result: { current },
      } = renderHook(() => useAuthentication());
      expect(current).toEqual(mockData);
    });
  });
});
