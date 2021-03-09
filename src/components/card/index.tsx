// Dependencies
import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';

// Models
import { ICard } from './models';

// Styles
import useStyles from './styles';

const Card = ({ status, children, onPress }: ICard): ReactElement => {
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[status]]}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;
