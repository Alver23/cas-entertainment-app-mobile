// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Components
import Loading from '@components/loading';

// Models
import { IFooterProps } from './models';

// Styles
import useStyles from './styles';

export const Footer = ({ isLoading }: IFooterProps): ReactElement => {
  const styles = useStyles();

  return isLoading ? <Loading containerStyle={styles.containerStyle} /> : <View style={styles.containerStyle} />;
};

export default Footer;
