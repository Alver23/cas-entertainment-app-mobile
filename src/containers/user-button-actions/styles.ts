// Hooks
import { makeStyles } from '@hooks/theme';

const styles = makeStyles(() => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    width: '28%',
  },
  editButton: {
    marginRight: 8,
  },
  deleteButton: {
    marginLeft: 8,
  },
}));

export default styles;
