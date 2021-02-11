// Dependencies
import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';

// Models
import { ILoadingProps } from './models';

// Styles
import useStyles from './styles';

const Loading = ({ loadingProps = {}, containerStyle }: ILoadingProps): ReactElement => {
  const styles = useStyles();
  const activiyProps = {
    size: 'large',
    color: styles.loading.color,
    style: containerStyle,
    ...loadingProps,
  };
  return <ActivityIndicator {...activiyProps} />;
};

export default Loading;
