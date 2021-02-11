import { ActivityIndicatorProps, ViewStyle } from 'react-native';

type loadingProps = ActivityIndicatorProps;

export interface ILoadingProps {
  loadingProps?;
  containerStyle?: ViewStyle;
}
