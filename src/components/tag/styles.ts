// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
}));

export default styles;
