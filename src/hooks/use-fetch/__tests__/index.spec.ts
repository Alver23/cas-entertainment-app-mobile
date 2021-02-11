// Dependencies
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Test file
import { useFetch } from '../index';

describe('Fetch Hooks', () => {
  const reducerMock: [any, jest.Mock] = [null, jest.fn()];
  beforeEach(() => {
    jest.spyOn(React, 'useRef').mockImplementation(() => ({ current: true }));

    jest.spyOn(React, 'useReducer').mockReturnValue(reducerMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call to callback when the component is not mounted', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({ current: false });

    const mockResponse = [{ key: false }];
    const mockCallback: any = jest.fn().mockResolvedValue(mockResponse);
    renderHook(() => useFetch(mockCallback, []));
    expect(reducerMock[1]).toHaveBeenCalled();
  });

  it('should call to callback and return data, fetch', () => {
    const mockResponse = [{ key: false }];
    jest.spyOn(React, 'useRef').mockReturnValue({ current: true });
    const mockCallback: any = jest.fn().mockResolvedValue(mockResponse);
    renderHook(() => useFetch(mockCallback, []));
    expect(reducerMock[1]).toHaveBeenCalled();
  });

  it('should reject promise', () => {
    const error = 'test error';
    jest.spyOn(React, 'useRef').mockReturnValue({ current: true });
    const mockCallback: any = jest.fn().mockRejectedValue(error);
    renderHook(() => useFetch(mockCallback, []));
    expect(reducerMock[1]).toHaveBeenCalled();
  });
});
