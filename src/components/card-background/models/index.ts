// Dependencies
import { ViewProps } from 'react-native';

export interface ICard {
  backgroundImage: ViewProps;
  onPress: () => void;
  text: string;
}
