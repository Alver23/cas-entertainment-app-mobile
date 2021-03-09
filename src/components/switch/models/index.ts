// Dependencies
import { ISwitchSelectorOption } from 'react-native-switch-selector';

export interface ISwitchProps {
  initialOption?: number;
  options: ISwitchSelectorOption[];
  onPress: (value: string | number | ISwitchSelectorOption) => void;
}
