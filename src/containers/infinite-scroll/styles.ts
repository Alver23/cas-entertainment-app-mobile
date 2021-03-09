// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  loading: {
    color: colors.primary,
  },
  itemSeparatorContainer: {
    color: colors.gray2,
  },
}));

export default styles;
