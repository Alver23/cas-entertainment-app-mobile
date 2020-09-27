// Dependencies
import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';

// Containers
import { MenuItems } from '@containers/menu-items';

// Components
import { LayoutView } from '@components/layout';
import { AppLogoView } from '@components/app-logo';

// Core
import I18n from '@core/i18n';

// Hooks
import { useAuthentication } from '@hooks/authentication';

// Styles
import { useStyles } from './styles';

export const HomeScreen = (): ReactElement => {
  const styles = useStyles();
  const { logout } = useAuthentication();
  return (
    <ScrollView style={styles.container}>
      <LayoutView style={styles.layoutContainer}>
        <AppLogoView />
        <Text h4 style={styles.text}>
          {I18n.t('homeScreen.welcome')}
        </Text>
        <MenuItems />
        <Button title="Logout" onPress={logout} />
      </LayoutView>
    </ScrollView>
  );
};
