// Dependencies
import React, { ReactElement } from 'react';

// Hooks
import { useStateAction } from '@hooks/state-action';
import { useAuthentication } from '@hooks/authentication';

// Navigation
import { AppStack } from '@navigation/app-stack';
import { AuthStack } from '@navigation/auth-stack';

// Containers
import { AppIntro } from '../app-intro';

export const AppContainer = (): ReactElement => {
  const { authenticated } = useAuthentication();
  const [mustShowIntro, , skipIntro] = useStateAction(!authenticated);

  return (
    <>
      {mustShowIntro && <AppIntro onSkip={skipIntro} />}
      {authenticated && <AppStack />}
      {!authenticated && !mustShowIntro && <AuthStack />}
    </>
  );
};
