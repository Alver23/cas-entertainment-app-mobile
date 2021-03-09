// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Components
import { LayoutView } from '@components/layout';

// Containers
import { ArtistContainer } from '@containers/artists';

// Core
import I18n from '@core/i18n';

// Styles
import useStyles from './styles';

export const ArtistScreen = (): ReactElement => {
  const { navigate } = useNavigation();
  const navigateToArtistDetail = React.useCallback(
    (id: number) => {
      navigate('artistDetail', { id });
    },
    [navigate],
  );
  const styles = useStyles();
  return (
    <LayoutView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{I18n.t('artistScreen.title')}</Text>
      </View>
      <ArtistContainer navigateToArtistDetail={navigateToArtistDetail} />
      <Button containerStyle={styles.buttonContainer} title={I18n.t('artistScreen.buttonTitle')} />
    </LayoutView>
  );
};
