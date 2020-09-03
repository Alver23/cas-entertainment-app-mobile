// Reducers
import { globalReducers } from '../index';

describe('Global reducers', () => {
  const initialState = {
    showLoader: false,
  };
  describe('show loader', () => {
    it('should handle APP_SHOW_LOADER when the payload is true', () => {
      const action = {
        type: 'APP_SHOW_LOADER',
        payload: true,
      };
      expect(globalReducers(initialState, action)).toHaveProperty('showLoader', true);
    });
  });
});
