// Hooks
import { makeStyles } from '@hooks/theme';

// core
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '68%',
  },
  icon: {
    color: colors.white,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '20%',
  },
}));

export default styles;
