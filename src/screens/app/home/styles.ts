// Hooks
import { makeStyles } from '@hooks/theme';

// Core
import { ITheme } from '@core/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    backgroundColor: theme.colors.blue2,
    flex: 1,
  },
  layoutContainer: {
    alignItems: 'center',
  },
  text: {
    marginVertical: 8,
  },
}));
