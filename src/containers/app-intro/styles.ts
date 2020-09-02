// Hooks
import { makeStyles } from '@hooks/theme';

const styles = makeStyles(({ colors }) => ({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 96,
  },
  dotStyle: {
    backgroundColor: colors.white,
  },
  activeDotStyle: {
    backgroundColor: colors.blue2,
  },
}));

export default styles;
