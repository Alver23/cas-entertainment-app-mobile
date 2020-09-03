// Translations
import appIntroTranslations from '@containers/app-intro/messages';
import loginTranslations from '@containers/login-form/messages';

export default {
  ...appIntroTranslations.en,
  ...loginTranslations.en,
  commons: {
    submitButtonTitle: 'Guardar',
    cancelButtonTitle: 'Cancelar',
  },
};
