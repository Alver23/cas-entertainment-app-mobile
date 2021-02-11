// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

// Core
import I18n from '@core/i18n';

// Hooks
import { useAuthentication } from './hooks';

// Containers
import { FormGenerator } from '../form-generator';

// Schema
import { formSchema } from './form-schema';

// Styles
import { useStyles } from './styles';

export const LoginForm = (): ReactElement => {
  const [error, onSubmit] = useAuthentication();
  const styles = useStyles();

  return (
    <>
      <FormGenerator {...formSchema} onSubmit={onSubmit} submitLabelButton={I18n.t('login.form.submitButtonTitle')}>
        {error && (
          <View style={styles.textErrorContainer}>
            <Text style={styles.textError}>{I18n.t('login.form.submitError')}</Text>
          </View>
        )}
      </FormGenerator>
    </>
  );
};
