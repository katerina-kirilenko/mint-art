import { makeStyles, Theme } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  header: {
    flexGrow: 1,
    borderBottom: `1px solid ${palette.grey[200]}`,
  },
  topBar: {
    boxShadow: 'none',
    backgroundColor: colors.light,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1rem',
    minHeight: 'auto',
  },
  gridContainer: {
    width: 'auto',
  },
}));
