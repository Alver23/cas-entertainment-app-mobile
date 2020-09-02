// Mocking react native i18n
jest.mock('@core/i18n', () => {
  const i18njs = require('i18n-js');
  const en = require('@core/i18n/locales/en').default;
  i18njs.translations = { en };
  return {
    t: jest.fn((k, o) => i18njs.t(k, o)),
  };
});

// Mocking react native restart
jest.mock('react-native-restart', () => ({
  Restart: jest.fn(),
}));

// Mocking react native sensitive info
jest.mock('react-native-sensitive-info', () => ({
  setItem: jest.fn(),
  deleteItem: jest.fn(),
  getItem: jest.fn(),
}));
