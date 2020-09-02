// Hooks
import { makeStyles } from '@hooks/theme';

// Commons
import { SCREEN_HEIGHT } from '@commons/app';

const styles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 96,
  },
  image: {
    height: SCREEN_HEIGHT / 2,
    resizeMode: 'contain',
    marginBottom: 32,
  },
}));

export default styles;
