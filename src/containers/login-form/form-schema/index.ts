// Models
import { IField, IFormSchema, CONTROL_TYPES } from '@containers/form-generator/models/form-generator-interface';

// Core
import I18n from '@core/i18n';
import { formValidations } from './validations';

const translations = I18n.t('login.form');
const { email, password } = translations;

const formFields: IField[] = [
  {
    key: 'email',
    placeholder: email.placeholder,
    controlType: CONTROL_TYPES.INPUT,
    customAttributes: {
      autoCapitalize: 'none',
      textContentType: 'emailAddress',
    },
  },
  {
    key: 'password',
    placeholder: password.placeholder,
    controlType: CONTROL_TYPES.INPUT,
    customAttributes: {
      secureTextEntry: true,
      textContentType: 'password',
    },
  },
];

export const formSchema: IFormSchema = {
  fields: formFields,
  validations: formValidations,
};
