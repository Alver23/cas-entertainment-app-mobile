// Dependencies
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  avatarContainer: {
    backgroundColor: colors.gray2,
    marginVertical: 8,
  },
  container: {
    alignItems: 'center',
    marginVertical: 8,
  },
  description: {
    color: colors.white,
    fontSize: hp('2%'),
  },
  title: {
    color: colors.primary,
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginVertical: 4,
  },
}));

export default styles;
