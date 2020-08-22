// Dependencies
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaView, StatusBar } from 'react-native';

// @Core
import { theme } from './core/theme';

// Container
import { AppIntro } from './containers';

const App = (): ReactElement => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.blue1} />
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.blue1 }}>
          <AppIntro />
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
