// Translations
import appIntroTranslations from '@containers/app-intro/messages';
import loginTranslations from '@containers/login-form/messages';
import menuTranslations from '@containers/menu-items/messages';
import homeTranslations from '@screens/app/home/messages';
import artistTranslations from '@screens/app/artists/messages';
import groupTranslations from '@containers/group/messages';
import artistGroupTranslations from '@containers/artists/containers/group-section/messages';
import artistRhythmTranslations from '@containers/artists/containers/rhythm-section/messages';
import phoneCallTranslations from '@containers/phone-call/messages';

export default {
  ...appIntroTranslations.es,
  ...loginTranslations.es,
  ...menuTranslations.es,
  ...homeTranslations.es,
  ...artistTranslations.es,
  ...groupTranslations.es,
  ...artistGroupTranslations.es,
  ...artistRhythmTranslations.es,
  ...phoneCallTranslations.es,
  commons: {
    submitButtonTitle: 'Guardar',
    cancelButtonTitle: 'Cancelar',
    searchPlaceholder: 'Buscar',
    searchButtonTitle: 'Buscar',
    labelActive: 'Activo',
    labelInactive: 'Inactivo',
    editLabel: 'Editar',
    deleteLabel: 'Eliminar',
    addLabel: 'Agregar',
  },
};
