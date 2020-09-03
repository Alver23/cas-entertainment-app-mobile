// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

// Hooks
import { useAuthentication } from '@hooks/authentication';

export const HomeScreen = (): ReactElement => {
  const { logout } = useAuthentication();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
