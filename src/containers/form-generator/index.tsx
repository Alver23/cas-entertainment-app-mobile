// Dependencies
import React, { ReactElement, MemoExoticComponent } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';

// Core
import I18n from '@core/i18n';

// Components
import { InputForm } from './components/input';

// Models
import { IFormSchema } from './models/form-generator-interface';

const COMPONENT_TYPES: Record<string, ReactElement | MemoExoticComponent<any>> = {
  input: InputForm,
};

export const FormGenerator = ({ fields, initialValues, validations, onSubmit, submitLabelButton, children }: IFormSchema): ReactElement => {
  const formInitialValues = (): Record<string, string> => {
    return fields.reduce((initValues, { key }) => ({ ...initValues, [key]: initialValues?.[key] }), {});
  };

  const renderInputs = (fieldsConfig, formikProps): ReactElement => {
    const { handleChange, handleBlur, values, touched, errors } = formikProps;
    return fieldsConfig.map(({ controlType, key, ...props }) => {
      const Component: any = COMPONENT_TYPES[controlType];
      return (
        <View key={`${controlType}-${key}`}>
          <Component
            {...props}
            onChangeText={handleChange(key)}
            onBlur={handleBlur(key)}
            value={values?.[key]}
            errorMessage={touched[key] && errors[key]}
          />
        </View>
      );
    });
  };

  return (
    <Formik validationSchema={validations} initialValues={formInitialValues()} onSubmit={onSubmit}>
      {({ handleSubmit, ...formikProps }) => (
        <>
          {renderInputs(fields, formikProps)}
          <Button onPress={handleSubmit} title={submitLabelButton || I18n.t('commons.submitButtonTitle')} />
          {children}
        </>
      )}
    </Formik>
  );
};
