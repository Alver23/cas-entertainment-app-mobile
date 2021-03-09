// Dependencies
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Hooks
import { makeStyles } from '@hooks/theme';

// Models
import { ITheme } from '@core/theme';

const styles = makeStyles(({ colors }: ITheme) => ({
  buttonContainer: {
    height: 24,
    margin: 0,
    padding: 0,
    width: 'auto',
  },
  container: {
    flex: 1,
    marginVertical: 20,
    width: '100%',
  },
  dividerContainer: {
    backgroundColor: colors.white,
    width: '100%',
  },
  buttonTitle: {
    color: colors.blue2,
    fontSize: hp('2%'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  groupListContainer: {
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeftIconContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 8,
  },
}));

export default styles;
