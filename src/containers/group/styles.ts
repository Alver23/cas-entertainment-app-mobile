// Hooks
import { makeStyles } from '@hooks/theme';

const styles = makeStyles(() => ({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
  },
}));

export default styles;
