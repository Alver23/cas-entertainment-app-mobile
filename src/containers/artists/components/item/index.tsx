// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Avatar, Text, Divider } from 'react-native-elements';

// Components
import Tag from '@components/tag';
import ListItem from '@components/list-item';

// Core
import I18n from '@core/i18n';

// Models
import { IItemProps } from './models';

// Styles
import useStyles from './styles';

const Item = ({ item, onPress }: IItemProps): ReactElement => {
  const styles = useStyles();
  return (
    <View>
      <ListItem
        onPress={() => onPress(item.id)}
        leftContainer={
          <>
            <Avatar containerStyle={styles.container} rounded title={`${item.firstName[0]}${item.lastName[0]}`} />
            <View style={styles.textContainer}>
              <Text numberOfLines={1}>{item.fullName}</Text>
            </View>
          </>
        }
        rightContainer={<Tag text={item.active ? I18n.t('commons.labelActive') : I18n.t('commons.labelInactive')} />}
      />
      <Divider style={styles.container} />
    </View>
  );
};
export default Item;
