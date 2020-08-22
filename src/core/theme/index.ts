// Dependencies
import { Platform } from 'react-native';
import { ButtonProps, Colors, TextProps } from 'react-native-elements';

const blue1 = '#0B132A';
const white = '#ffffff';
const fontFamilyIos = 'Helvetica';
const fontFamilyAndroid = 'Roboto';

const fontFamily = {
  ...Platform.select({
    android: {
      fontFamily: fontFamilyAndroid,
    },
    ios: {
      fontFamily: fontFamilyIos,
    },
  }),
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };
type ColorTypes = RecursivePartial<Colors> & { white: string; blue1: string; blue2: string };
export const theme: Partial<{ colors: RecursivePartial<ColorTypes>; Text: Partial<TextProps>; Button: Partial<ButtonProps> }> = {
  colors: {
    white,
    blue1,
    primary: '#15E1CA',
    blue2: '#186AA5',
  },
  Text: {
    style: {
      color: white,
      fontSize: 15,
      ...fontFamily,
    },
    h4Style: {
      fontSize: 30,
    },
  },
  Button: {
    containerStyle: {
      alignItems: 'center',
    },
    buttonStyle: {
      width: 312,
      height: 50,
    },
    titleStyle: {
      color: blue1,
      fontSize: 17,
      ...fontFamily,
    },
  },
};

export default theme;
