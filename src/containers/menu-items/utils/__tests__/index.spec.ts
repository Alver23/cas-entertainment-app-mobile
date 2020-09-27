import { getMenuItems } from '../index';

// Mocks
import mocks from './mocks.json';

describe('Menu Utils', () => {
  it('should get menu items', () => {
    const items = getMenuItems(mocks.items, mocks.translations as { [key: string]: string });
    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          description: expect.any(String),
          image: expect.objectContaining({
            testUri: expect.any(String),
          }),
          name: expect.any(String),
          orden: expect.any(Number),
          route: expect.any(String),
        }),
      ]),
    );
  });
});
