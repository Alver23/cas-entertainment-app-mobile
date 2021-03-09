// Dependencies
import { Dimensions } from 'react-native';

import I18n from '@core/i18n';

export const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export const { width: SCREEN_WIDTH } = Dimensions.get('window');

export enum STATUS_TYPES {
  IDLE = 'idle',
  SUCCEEDED = 'succeeded',
  LOADING = 'loading',
  FAILED = 'failed',
}

export enum ROLES {
  ADMIN = 'Admin',
  SUPER_ADMIN = 'Super Admin',
}

export const getStateOptions = () => [
  { label: I18n.t('commons.labelActive'), value: 1 },
  { label: I18n.t('commons.labelInactive'), value: 0 },
];

export const findIndexFromByValue = (value: number): number => {
  return getStateOptions().findIndex((option) => option.value === value);
};
