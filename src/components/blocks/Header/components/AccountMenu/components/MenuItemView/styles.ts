import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  menuItem: {
    display: 'flex',
    padding: '10px 32px',
    fontSize: '1rem',
    lineHeight: '24px',
    '&:hover a': {
      color: palette.text.primary,
      textDecoration: 'none',
    },
    '&:hover $icon': {
      '& svg': {
        fill: palette.text.primary,
      },
    },
    '&&:hover $iconSubMenu': {
      '& svg': {
        fill: palette.primary.dark,
      },
    },
    '&&:hover $iconArrowSubMenu': {
      '& svg': {
        fill: palette.primary.dark,
      },
    },
  },
  icon: {
    minWidth: '2em',
    '& svg': {
      fill: palette.text.secondary,
      width: '0.7em',
      height: '0.7em',
    },
  },
  iconArrowSubMenu: {
    minWidth: 'inherit',
    '& svg': {
      fill: palette.primary.main,
      width: '0.6em',
      height: '0.6em',
    },
  },
  iconSubMenu: {
    '& svg': {
      fill: palette.primary.main,
    },
  },
  link: {
    color: palette.text.secondary,
  },
  listItem: {
    display: 'block',
    margin: '7px 32px',
    padding: 0,
    width: 'auto',
  },
  arrow: {
    justifyContent: 'space-between',
  },
}));
