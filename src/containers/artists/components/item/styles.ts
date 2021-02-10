// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    backgroundColor: colors.gray2,
  },
  textContainer: {
    marginLeft: 12,
  },
}));

export default styles;
