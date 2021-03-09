// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = makeStyles(({ colors }: ITheme) => ({
  dividerContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftIconContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  buttonContainer: {
    height: 24,
    margin: 0,
    padding: 0,
    width: 'auto',
  },
  buttonTitle: {
    color: colors.blue2,
    fontSize: hp('2%'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  iconContainer: {
    marginRight: 8,
  },
}));

export default styles;
