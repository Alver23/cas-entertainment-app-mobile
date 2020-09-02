// Actions
import { appShowLoaderAction } from '../index';

describe('Global actions', () => {
  describe('appShowLoaderAction', () => {
    it('should call the action and return type, payload', () => {
      const action: ReturnType<typeof appShowLoaderAction> = appShowLoaderAction(true);
      expect(action).toEqual(
        expect.objectContaining({
          type: expect.any(String),
          payload: expect.any(Boolean),
        }),
      );
    });
  });
});
