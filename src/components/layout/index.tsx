// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Models
import { ILayoutProps } from './models/layout-interface';

// styles
import useStyles from './styles';

export const LayoutView = ({ children, style }: ILayoutProps): ReactElement => {
  const styles = useStyles();
  return <View style={[styles.container, style]}>{children}</View>;
};
