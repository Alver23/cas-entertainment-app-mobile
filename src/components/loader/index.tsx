// Dependencies
import React, { ReactElement } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

// Hooks
import { useTheme } from '@hooks/theme';
// Styles
import useStyles from './styles';

const Component = (): ReactElement => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
    </View>
  );
};

export const LoaderView = React.memo(Component);
