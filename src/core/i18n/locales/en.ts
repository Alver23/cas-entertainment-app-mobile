// Translations
import appIntroTranslations from '@containers/app-intro/messages';
import loginTranslations from '@containers/login-form/messages';
import menuTranslations from '@containers/menu-items/messages';
import homeTranslations from '@screens/app/home/messages';
import artistTranslations from '@screens/app/artists/messages';

export default {
  ...appIntroTranslations.en,
  ...loginTranslations.en,
  ...menuTranslations.en,
  ...homeTranslations.en,
  ...artistTranslations.en,
  commons: {
    submitButtonTitle: 'Guardar',
    cancelButtonTitle: 'Cancelar',
    searchPlaceholder: 'Buscar',
    searchButtonTitle: 'Buscar',
    labelActive: 'Activo',
    labelInactive: 'Inactivo',
  },
};
