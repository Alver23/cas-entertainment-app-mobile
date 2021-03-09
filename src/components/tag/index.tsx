// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

// Models
import { ITagProps } from './models';

// Styles
import useStyles from './styles';

export const Tag = ({ children, text, style }: ITagProps): ReactElement => {
  const styles = useStyles();
  return (
    <View style={[styles.container, style]}>
      {text && <Text>{text}</Text>}
      {children}
    </View>
  );
};

export default Tag;
