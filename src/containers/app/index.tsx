// Dependencies
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

// Components
import { LoaderView } from '@components/loader';

// Hooks
import { useStateAction } from '@hooks/state-action';
import { useLocalSession } from '@hooks/auth';

// Navigation
import { AppStack } from '@navigation/app-stack';
import { AuthStack } from '@navigation/auth-stack';

// Selectors
import { selectAppLoader } from '@store/selectors/globals';

// Containers
import { AppIntro } from '../app-intro';

export const AppContainer = (): ReactElement => {
  const loader = useSelector(selectAppLoader);
  const { authenticated } = useLocalSession();
  const [mustShowIntro, , skipIntro] = useStateAction(!authenticated);

  return (
    <>
      {loader && <LoaderView />}
      {mustShowIntro && <AppIntro onSkip={skipIntro} />}
      {authenticated && <AppStack />}
      {!authenticated && !mustShowIntro && <AuthStack />}
    </>
  );
};
