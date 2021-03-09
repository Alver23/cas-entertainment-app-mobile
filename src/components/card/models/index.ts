// Dependencies
import { ReactElement } from 'react';

// Config
import { STATUS_TYPES } from '../config';

export interface ICard {
  status: STATUS_TYPES;
  children: ReactElement;
  onPress: () => void;
}
