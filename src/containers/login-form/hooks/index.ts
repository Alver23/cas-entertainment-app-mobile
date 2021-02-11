// Dependencies
import React from 'react';
import RNRestart from "react-native-restart";

// Hooks
import { useShowAppLoader } from '@hooks/app-loader';
import { useStateAction } from '@hooks/state-action';

// Services
import { authenticationService } from '@services/authentication/authentication-service';

// Commons
import { setAuthData } from "@commons/auth";

export const useAuthentication = (): [boolean, (values) => void] => {
  const [showAppLoader] = useShowAppLoader();
  const [error, showError, hideError] = useStateAction();

  const onSubmit = React.useCallback((values) => {
    showAppLoader(true);
    authenticationService
      .login(values)
      .then(async ({ data }) => {
        await setAuthData(data);
        hideError();
        RNRestart.Restart();
      })
      .catch(() => {
        showError()
      })
      .finally(() => showAppLoader(false))
  }, []);

  return [error, onSubmit]
}
