// Dependencies
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface IListItem {
  onPress: () => void;
  rightContainer?: ReactNode;
  leftContainer?: ReactNode;
  rightContainerStyle?: ViewProps;
  leftContainerStyle?: ViewProps;
}
