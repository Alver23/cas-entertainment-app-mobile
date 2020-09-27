// Dependencies
import * as ReactRedux from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useShowAppLoader } from '../index';

// Mocks
jest.mock('react-redux');

describe('useShowAppLoader', () => {
  it('should call the callback when component did mount', () => {
    const callback = jest.fn();
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(callback);
    const { result } = renderHook(() => useShowAppLoader());
    result.current[0]();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
