// Dependencies
import { StyleSheet } from 'react-native';

// Hooks
import { makeStyles } from '@hooks/theme';

const styles = makeStyles(({ colors }) => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center',
    zIndex: 3,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
}));

export default styles;
