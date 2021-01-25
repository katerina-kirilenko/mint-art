import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  gridContainerUnAutorized: {
    width: 'auto',
    '& *': {
      margin: '0 5px',
    },
  },
  linkSearch: {
    display: 'flex',
  },
  iconSearch: {
    fill: palette.grey[500],
  },
}));
