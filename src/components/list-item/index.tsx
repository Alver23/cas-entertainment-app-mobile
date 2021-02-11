// Dependencies
import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

// Styles
import useStyles from './styles';

// Models
import { IListItem } from './models';

const ListItem = ({ onPress, rightContainer, leftContainer, rightContainerStyle, leftContainerStyle }: IListItem): ReactElement => {
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <View style={[styles.leftContainer, leftContainerStyle]}>{leftContainer}</View>
        <View style={[styles.rightContainer, rightContainerStyle]}>
          {rightContainer}
          <Icon iconStyle={styles.icon} name="keyboard-arrow-right" type="material" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
