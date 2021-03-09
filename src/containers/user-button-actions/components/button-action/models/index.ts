// Dependencies
import { ViewProps } from 'react-native';
import { IconProps } from 'react-native-elements';

export interface IButtonAction {
  title: string;
  buttonStyle?: ViewProps;
  iconConfig?: IconProps;
  onPress: () => void;
}
