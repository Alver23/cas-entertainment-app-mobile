// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  button: {
    flexDirection: 'column',
    height: 48,
    margin: 0,
    padding: 0,
    width: 'auto',
  },
  title: {
    color: colors.primary,
    fontSize: 13,
  },
}));

export default styles;
