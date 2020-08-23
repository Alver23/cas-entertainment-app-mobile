// Dependencies
import React from 'react';
import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ThemeContext } from 'react-native-elements';

export const useTheme = (): Partial<{}> => {
  const { theme } = React.useContext(ThemeContext);
  return theme;
};

export const makeStyles = (styles: Function | Record<string, string>): Function => (): Function => {
  const theme = useTheme();
  const stylesObject = typeof styles === 'function' ? styles(theme) : styles;
  return React.useMemo(() => StyleSheet.create(stylesObject), [stylesObject]);
};
