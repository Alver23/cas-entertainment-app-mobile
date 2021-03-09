// Dependencies
import React, { ReactElement } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Containers
import { UserProvider } from '@containers/user-provider';

// Screens
import { HomeScreen } from '@screens/app';
import { ArtistScreen } from '@screens/app/artists';
import ArtistDetail from '@screens/app/artist-detail';

// Core
import { customColors } from '@core/theme';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    card: customColors.blue1,
    text: customColors.white,
    primary: customColors.white,
  },
};

export const AppStack = (): ReactElement => {
  return (
    <UserProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen options={{ headerTitle: '' }} name={'artists'} component={ArtistScreen} />
          <Stack.Screen name={'students'} component={ArtistScreen} />
          <Stack.Screen name={'groups'} component={ArtistScreen} />
          <Stack.Screen name={'itineraries'} component={ArtistScreen} />
          <Stack.Screen name={'teachers'} component={ArtistScreen} />
          <Stack.Screen name={'users'} component={ArtistScreen} />
          <Stack.Screen options={{ headerTitle: '' }} name={'artistDetail'} component={ArtistDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};
