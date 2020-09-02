// Hooks
import { makeStyles } from '@hooks/theme';

// core
import { ITheme } from '@core/theme';

const styles = makeStyles((theme: ITheme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue1,
  },
}));

export default styles;
