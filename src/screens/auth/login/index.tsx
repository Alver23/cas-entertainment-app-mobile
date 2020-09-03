// Dependencies
import React, { ReactElement } from 'react';

// Components
import { LayoutView } from '@components/layout';
import { AppLogoView } from '@components/app-logo';

// Containers
import { LoginForm } from '@containers/login-form';

export const LoginScreen = (): ReactElement => (
  <LayoutView style={{ justifyContent: 'center' }}>
    <AppLogoView />
    <LoginForm />
  </LayoutView>
);
