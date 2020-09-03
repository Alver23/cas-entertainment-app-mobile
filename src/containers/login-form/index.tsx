// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import RNRestart from 'react-native-restart';

// Services
import { userService } from '@services/user/user-service';
import { authenticationService } from '@services/authentication/authentication-service';

// Core
import I18n from '@core/i18n';

// Hooks
import { useStateAction } from '@hooks/state-action';

// Containers
import { FormGenerator } from '../form-generator';

// Schema
import { formSchema } from './form-schema';

// Styles
import { useStyles } from './styles';

export const LoginForm = (): ReactElement => {
  const [error, showError, hideError] = useStateAction();
  const styles = useStyles();

  const onSubmit = React.useCallback((values) => {
    authenticationService
      .login(values)
      .then(async (response) => {
        await userService.setUserInfo(response);
        hideError();
        RNRestart.Restart();
      })
      .catch(() => showError());
  }, []);

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
