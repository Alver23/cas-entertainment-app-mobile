// Dependencies
import React, { ReactElement } from 'react';
import SwitchSelector from 'react-native-switch-selector';

// Hooks
import { useTheme } from '@hooks/theme';

// Models
import { ISwitchProps } from './models';

// Styles
import useStyles from './styles';

const Switch = ({ options, initialOption, onPress }: ISwitchProps): ReactElement => {
  const styles = useStyles();
  const { colors } = useTheme();

  return (
    <SwitchSelector
      options={options}
      initial={initialOption}
      buttonColor={colors.primary}
      textColor={colors.color1}
      borderRadius={8}
      height={28}
      animationDuration={350}
      style={styles.container}
      backgroundColor={colors.blue1}
      onPress={onPress}
    />
  );
};

export default Switch;
