// Dependencies
import React, { Dispatch } from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useStateAction } from '../index';

describe('useStateAction', () => {
  it('should call the hook correctly', () => {
    const {
      result: { current },
    } = renderHook(() => useStateAction());
    expect(current).toEqual(expect.arrayContaining([expect.any(Boolean), expect.any(Function), expect.any(Function)]));
  });

  it('should change the state to true', () => {
    const mockState: [boolean, Dispatch<() => void>] = [true, jest.fn()];
    jest.spyOn(React, 'useState').mockReturnValue(mockState);
    const { result } = renderHook(() => useStateAction());
    const [, show] = result.current;
    show();
    expect(mockState[1]).toHaveBeenCalledWith(true);
  });

  it('should change the state to false', () => {
    const mockState: [boolean, Dispatch<() => void>] = [true, jest.fn()];
    jest.spyOn(React, 'useState').mockReturnValue(mockState);
    const { result } = renderHook(() => useStateAction());
    const [, , hide] = result.current;
    hide();
    expect(mockState[1]).toHaveBeenCalledWith(false);
  });
});
