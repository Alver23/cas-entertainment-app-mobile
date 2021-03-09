// Dependencies
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  tagContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  description: {
    color: colors.black,
    fontSize: hp('1.6%'),
  },
  iconContainer: {
    marginLeft: 8,
  },
}));

export default styles;
