// Components
import CardSmall from './components/card-small';
import CardLarge from './components/card-large';

export enum COMPONENT_TYPES {
  LARGE = 'large',
  SMALL = 'small',
}

export const COMPONENT_MAPPER = {
  [COMPONENT_TYPES.LARGE]: CardLarge,
  [COMPONENT_TYPES.SMALL]: CardSmall,
};
