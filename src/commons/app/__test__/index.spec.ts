import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../index';

// Mocks
jest.mock('react-native', () => ({
  Dimensions: {
    get: (type): Record<string, number> => {
      switch (type) {
        case 'screen':
          return { height: 480 };
        default:
          return { width: 300 };
      }
    },
  },
}));

describe('App commons', () => {
  it('should get screen height', () => {
    expect(SCREEN_HEIGHT).toBe(480);
  });

  it('should get screen width', () => {
    expect(SCREEN_WIDTH).toBe(300);
  });
});
