// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Button, Divider, Icon, Text } from 'react-native-elements';

// I18n
import I18n from '@core/i18n';

// Hooks
import { useTheme } from '@hooks/theme';

// Containers
import GroupList from '@containers/group';

// Models
import { IGroupSectionProps } from './models';

// Styles
import useStyles from './styles';

const GroupSection = ({ groupIds }: IGroupSectionProps): ReactElement => {
  const styles = useStyles();
  const { colors } = useTheme();
  return (
    <>
      <Divider style={styles.dividerContainer} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftIconContainer}>
            <Icon type={'font-awesome'} name={'users'} iconStyle={{ color: colors.white }} containerStyle={styles.iconContainer} />
            <Text style={styles.title}>{I18n.t('groupSection.title')}</Text>
          </View>
          <Button
            title={I18n.t('groupSection.labelButtonAdd')}
            type="clear"
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            icon={{
              type: 'ant-design',
              name: 'addusergroup',
              color: colors.blue2,
            }}
            onPress={() => console.log('Agregar grupo')}
            iconRight
          />
        </View>
        <View style={styles.groupListContainer}>
          <GroupList groupIds={groupIds} />
        </View>
      </View>
    </>
  );
};

export default GroupSection;
