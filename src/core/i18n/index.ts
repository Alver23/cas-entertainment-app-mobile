// Dependencies
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

// Translations
import { en, es } from './locales';

// Configuration for i18n.
I18n.fallbacks = true;
I18n.translations = { en, es };
const fallback = { languageTag: 'en', isRTL: false };
const translationsKeys = Object.keys(I18n.translations);
const { languageTag } = RNLocalize.findBestAvailableLanguage(translationsKeys) || fallback;
I18n.locale = languageTag;

I18n.defineMessages = (messages, locale = 'en'): void => {
  Object.assign(I18n.translations[locale], messages);
};

/**
 * Switch the language.
 * @param { string } locale The locale to switch.
 */
I18n.switchLanguage = (locale): void => {
  I18n.locale = locale;
};

export default I18n;
