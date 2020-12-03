import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  accordionDetails: {
    padding: '8px 0 22px 0',
  },
  controlLabel: {
    position: 'relative',
    margin: '0 0 8px 0',
    padding: '5px 0 5px 7px',
    width: '100%',
    backgroundColor: fade(palette.divider, 0.1),
    border: `1px solid transparent`,
    borderRadius: '8px',
    transition: 'background 200ms ease',
    '&:hover': {
      backgroundColor: fade(palette.divider, 0.15),
    },
    '& span': {
      fontWeight: 500,
      fontSize: '0.9rem',
      lineHeight: '1rem',
    },
  },
  check: {
    backgroundColor: 'transparent',
    borderColor: fade(palette.divider, 0.1),
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
    fill: palette.text.secondary,
  },
  formGroup: {
    display: 'flex',
  },
}));
