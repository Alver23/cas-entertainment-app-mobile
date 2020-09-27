// Dependencies
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '@screens/app';
import { ArtistScreen } from '@screens/app/artists';

const Stack = createStackNavigator();

export const AppStack = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={'artists'} component={ArtistScreen} />
        <Stack.Screen name={'students'} component={ArtistScreen} />
        <Stack.Screen name={'groups'} component={ArtistScreen} />
        <Stack.Screen name={'itineraries'} component={ArtistScreen} />
        <Stack.Screen name={'teachers'} component={ArtistScreen} />
        <Stack.Screen name={'users'} component={ArtistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
