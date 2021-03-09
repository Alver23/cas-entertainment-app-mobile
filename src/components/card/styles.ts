// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

import { STATUS_TYPES } from './config';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    margin: 4,
    padding: 8,
  },
  [STATUS_TYPES.GREEN]: {
    borderColor: colors.primary,
  },
}));

export default styles;
