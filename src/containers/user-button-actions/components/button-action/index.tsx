// Dependencies
import React, { ReactElement } from 'react';
import { Button } from 'react-native-elements';

// Hooks
import { useTheme } from '@hooks/theme';

// Models
import { IButtonAction } from './models';

// Styles
import useStyles from './styles';

const ButtonAction = ({ title, onPress, iconConfig, buttonStyle }: IButtonAction): ReactElement => {
  const styles = useStyles();
  const { colors } = useTheme();

  return (
    <Button
      title={title}
      type="clear"
      titleStyle={styles.title}
      buttonStyle={[styles.button, buttonStyle]}
      onPress={onPress}
      icon={{
        size: 28,
        color: colors.white,
        ...iconConfig,
      }}
    />
  );
};

export default ButtonAction;
