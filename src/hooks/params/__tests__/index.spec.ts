// Dependencies
import { renderHook, act } from '@testing-library/react-hooks';

// Under test file
import { useInitializeParamList, useParamList } from '../index';

describe('Params Hooks', () => {
  describe('useInitializeParamList', () => {
    it('should reset the parameters', () => {
      const { result } = renderHook(() => useInitializeParamList());
      const newParams = { limit: 1, page: 2 };
      act(() => {
        result.current[1](newParams);
      });
      expect(result.current[0]).toEqual(newParams);
      act(() => {
        result.current[2]();
      });

      expect(result.current[0]).toEqual({ limit: 10, page: 1 });
    });
  });

  describe('useParamList', () => {
    it('should get the list of parameters', () => {
      const { result } = renderHook(() => useParamList());
      expect(result.current).toEqual({});
    });
  });
});
