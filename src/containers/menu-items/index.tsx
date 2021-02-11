// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { MemoizedCard } from '@components/card';

// Hooks
import { useUserLocalSession } from '@hooks/user';

// Core
import I18n from '@core/i18n';

// Utils
import { getMenuItems } from './utils';

// Styles
import { styles } from './styles';

export const MenuItems = (): ReactElement => {
  const { navigate } = useNavigation();
  const { menus } = useUserLocalSession();
  const translations = I18n.t('menuItems');
  const items = getMenuItems(menus, translations);
  return (
    <View style={styles.container}>
      {items.map(({ id, image, name, route }) => (
        <MemoizedCard key={id.toString()} text={name} backgroundImage={image} onPress={() => navigate(route as any)} />
      ))}
    </View>
  );
};
