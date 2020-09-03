// Dependencies
import 'react-native-gesture-handler';
import './polyfills/base-64';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// Store
import { rootStore } from './store';

// @Core
import { theme } from './core/theme';
import './core/icon-config';

// Container
import { AppContainer } from './containers/app';
import { AuthProvider } from './containers/auth-provider';

// Styles
import styles from './styles';

const App = (): ReactElement => {
  return (
    <Provider store={rootStore}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.blue1} />
            <AppContainer />
          </SafeAreaView>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
