// Mocking react native i18n
jest.mock('@casentertainment/core/i18n', () => ({
  t: jest.fn(),
  defineMessages: jest.fn(),
}));
