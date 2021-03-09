// Dependencies
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    width: wp('44%'),
    justifyContent: 'space-between',
  },
  titleContainer: (state) => ({
    flex: 1,
    flexDirection: 'column',
    width: state ? wp('24%') : 'auto',
  }),
  title: {
    fontSize: hp('2%'),
  },
  description: {
    color: colors.gray2,
    fontSize: hp('1.6%'),
  },
  stateTitle: {
    color: colors.black,
    fontSize: hp('1.4%'),
  },
}));

export default styles;
