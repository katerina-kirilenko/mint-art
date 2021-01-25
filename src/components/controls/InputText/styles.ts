import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  textField: {
    fontSize: '1rem',
    borderRadius: '8px',
    border: `1px solid ${palette.divider}`,
    transition: transitions.create('all'),
    '&:hover': {
      boxShadow: `0 0 0 4px ${fade(palette.primary.main, 0.1)}`,
      '& $notchedOutline': {
        borderColor: palette.primary.main,
      },
    },
  },
  notchedOutline: {
    borderColor: 'transparent',
  },
  input: {
    padding: '10px 16px',
    height: 'auto',
  },
}));
