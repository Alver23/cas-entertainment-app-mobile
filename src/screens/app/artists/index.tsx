// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

// Components
import { LayoutView } from '@components/layout';

// Containers
import { ArtistContainer } from '@containers/artists';

// Core
import I18n from '@core/i18n';

// Styles
import useStyles from './styles';

export const ArtistScreen = (): ReactElement => {
  const styles = useStyles();
  return (
    <LayoutView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{I18n.t('artistScreen.title')}</Text>
      </View>
      <ArtistContainer />
      <Button containerStyle={styles.buttonContainer} title={I18n.t('artistScreen.buttonTitle')} />
    </LayoutView>
  );
};
