import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  accordionDetails: {
    padding: '8px 0 22px 0',
  },
  controlLabel: {
    position: 'relative',
    margin: '0 0 8px 0',
    padding: '5px 0 5px 7px',
    width: '100%',
    backgroundColor: palette.grey[100],
    border: `1px solid ${palette.grey[100]}`,
    borderRadius: '8px',
    transition: 'background 200ms ease',
    '&:hover': {
      backgroundColor: palette.grey[300],
      borderColor: palette.grey[300],
    },
    '& span': {
      fontWeight: 500,
      fontSize: '0.9rem',
      lineHeight: '1rem',
    },
  },
  check: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  select: {
    fontSize: '0.9rem',
  },
  wrapSelect: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    padding: '0.7rem',
    alignItems: 'center',
  },
  expand: {
    fill: palette.grey[700],
  },
  formGroup: {
    display: 'flex',
  },
}));
