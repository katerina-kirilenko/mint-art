import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  divider: {
    margin: '1rem 0',
  },
  link: {
    color: theme.palette.grey[500],
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.grey[700],
    },
  },
}));
