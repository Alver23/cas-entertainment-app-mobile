// Translations
import appIntroTranslations from '@containers/app-intro/messages';
import loginTranslations from '@containers/login-form/messages';
import menuTranslations from '@containers/menu-items/messages';
import homeTranslations from '@screens/app/home/messages';

export default {
  ...appIntroTranslations.es,
  ...loginTranslations.es,
  ...menuTranslations.es,
  ...homeTranslations.es,
  commons: {
    hello: 'Hi alver',
    submitButtonTitle: 'Guardar',
    cancelButtonTitle: 'Cancelar',
  },
};
