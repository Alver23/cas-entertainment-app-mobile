// Mocking react native i18n
jest.mock('@core/i18n', () => {
  const i18njs = require('i18n-js');
  const en = require('@core/i18n/locales/en').default;
  i18njs.translations = { en };
  return {
    t: jest.fn((k, o) => i18njs.t(k, o)),
  };
});
