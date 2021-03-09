// Dependencies
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  container: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    width: wp('48%'),
  },
}));

export default styles;
