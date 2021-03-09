// Dependencies
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Hooks
import { makeStyles } from '@hooks/theme';

const useStyles = makeStyles(() => ({
  container: {
    width: '40%',
  },
  buttonContainer: {
    marginVertical: 24,
  },
  title: {
    fontSize: hp('2%'),
  },
}));

export default useStyles;
