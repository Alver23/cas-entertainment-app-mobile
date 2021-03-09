// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  loading: {
    color: colors.primary,
  },
  containerStyle: {
    margin: 10,
  },
}));

export default styles;
