// Hooks
import { makeStyles } from '@hooks/theme';

export const useStyles = makeStyles(({ colors }) => ({
  textErrorContainer: {
    alignItems: 'center',
    marginVertical: 14,
  },
  textError: {
    color: colors.red,
  },
}));
