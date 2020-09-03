// Dependencies
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useDidMount } from '../index';

describe('useDidMount', () => {
  it('should call the callback when component did mount', () => {
    const callback = jest.fn();
    renderHook(() => useDidMount(callback));
    expect(callback).toHaveBeenCalled();
  });
});
