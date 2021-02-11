// Hooks
import { makeStyles } from '@hooks/theme';

// Core
import { ITheme } from '@core/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    backgroundColor: theme.colors.blue1,
  },
  layoutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 8,
  },
}));
