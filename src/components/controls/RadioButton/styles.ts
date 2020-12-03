import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  root: {
    marginRight: '6px',
    '&:hover': {
      backgroundColor: 'rgba(58, 175, 169, 0.1)',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    border: `1px solid ${palette.divider}`,
    backgroundColor: palette.background.paper,
    'input:hover ~ &': {
      borderColor: palette.primary.main,
    },
  },
  checkedIcon: {
    backgroundColor: '#fff',
    boxShadow: `inset 0 0 0 4px ${palette.primary.main}`,
    borderColor: palette.primary.main,
    'input:hover ~ &': {
      backgroundColor: '#fff',
    },
  },
}));
