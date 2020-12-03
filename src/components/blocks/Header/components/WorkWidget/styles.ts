import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  divider: {
    margin: '1rem 0',
  },
  link: {
    color: palette.text.secondary,
    '&:hover': {
      cursor: 'pointer',
      color: palette.text.primary,
    },
  },
}));
