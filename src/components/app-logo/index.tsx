// Dependencies
import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';

// Assets
import appLogo from '@assets/app-logo.png';

// Styles
import styles from './styles';

const Component = (): ReactElement => (
  <View style={styles.container}>
    <Image source={appLogo} />
  </View>
);

export const AppLogoView = React.memo(Component);
