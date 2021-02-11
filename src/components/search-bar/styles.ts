// Hooks
import { makeStyles } from '@hooks/theme';

const styles = makeStyles(({ colors }) => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  searchIcon: {
    color: colors.primary,
  },
  inputContainer: {
    backgroundColor: colors.white,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    flex: 4,
  },
  buttoncontainer: {
    flex: 1,
  },
}));

export default styles;
