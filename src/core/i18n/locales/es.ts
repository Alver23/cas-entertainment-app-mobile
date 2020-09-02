// Translations
import appIntroTranslations from '@containers/app-intro/messages';
import loginTranslations from '@containers/login-form/messages';

export default {
  ...appIntroTranslations.es,
  ...loginTranslations.es,
  commons: {
    hello: 'Hi alver',
    submitButtonTitle: 'Guardar',
    cancelButtonTitle: 'Cancelar',
  },
};
