// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Button, Divider, Icon, Text } from 'react-native-elements';

// Core
import I18n from '@core/i18n';

// Hooks
import { useTheme } from '@hooks/theme';

// Components
import Rhythm from './components/rhythm';

// Models
import { IRhythmSectionProps } from './models';

// Styles
import useStyles from './styles';

const RhythmSection = ({ skills }: IRhythmSectionProps): ReactElement => {
  const styles = useStyles();
  const { colors } = useTheme();
  return (
    <>
      <Divider style={styles.dividerContainer} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftIconContainer}>
            <Icon type={'font-awesome'} name={'user'} iconStyle={{ color: colors.white }} containerStyle={styles.iconContainer} />
            <Text style={styles.title}>{I18n.t('rhythmSection.title')}</Text>
          </View>
          <Button
            title={I18n.t('commons.addLabel')}
            type="clear"
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            icon={{
              type: 'ionicon',
              name: 'add-circle-outline',
              color: colors.blue2,
            }}
            onPress={() => console.log('Agregar')}
            iconRight
          />
        </View>
        <Rhythm skills={skills} />
      </View>
    </>
  );
};

export default RhythmSection;
