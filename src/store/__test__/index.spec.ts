// Store
import { rootStore } from '../index';

describe('RootStore', () => {
  it('shoul get store app', () => {
    expect(rootStore.getState()).toEqual(
      expect.objectContaining({
        global: expect.any(Object),
      }),
    );
  });
});
