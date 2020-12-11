import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: 'transparent',
  },
  appBar: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  content: {
    padding: '1rem',
    overflowY: 'scroll',
  },
}));
