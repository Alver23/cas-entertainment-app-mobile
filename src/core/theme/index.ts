// Dependencies
import { Platform } from 'react-native';
import { FullTheme, Colors } from 'react-native-elements';

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
export type ColorTypes = RecursivePartial<Colors> & { white: string; blue1: string; blue2: string; transparent: string };

export const customColors = {
  white: '#ffffff',
  blue1: '#0B132A',
  blue2: '#186AA5',
  transparent: '#F5FCFF88',
  color1: '#495057',
  red: 'red',
  primary: '#15E1CA',
  gray2: '#707070',
  black: 'black',
};

export interface ITheme extends FullTheme {
  colors: RecursivePartial<ColorTypes>;
}
export const theme: Partial<ITheme> = {
  colors: { ...customColors },
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
  Input: {
    containerStyle: {
      alignItems: 'center',
    },
    inputContainerStyle: [
      {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: customColors.blue2,
        paddingHorizontal: 10,
        height: 48,
        width: 312,
        backgroundColor: customColors.white,
      },
    ],
    inputStyle: {
      fontSize: 17,
      color: customColors.color1,
    },
  },
};

export default theme;
