// Dependencies
import React, { ReactElement } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';

// Styles
import useStyles from './styles';

// Models
import { IItemProps } from './item-interface';

const Item = ({ item }: IItemProps): ReactElement => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.slide}>
        <Image style={styles.image} source={item.image} />
        <Text h4>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

export default React.memo(Item);
