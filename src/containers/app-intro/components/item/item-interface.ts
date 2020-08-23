// Dependencies
import { ImageSourcePropType } from 'react-native';

export interface IItemProps {
  item: {
    image: ImageSourcePropType;
    title: string;
    text: string;
  };
}
