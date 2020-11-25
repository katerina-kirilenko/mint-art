import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  menuItem: {
    display: 'flex',
    padding: '10px 32px',
    fontSize: '1rem',
    lineHeight: '24px',
    '&:hover a': {
      color: theme.palette.secondary.dark,
      textDecoration: 'none',
    },
    '&:hover $icon': {
      '& svg': {
        fill: theme.palette.secondary.dark,
      },
    },
    '&&:hover $iconSubMenu': {
      '& svg': {
        fill: theme.palette.primary.dark,
      },
    },
    '&&:hover $iconArrowSubMenu': {
      '& svg': {
        fill: theme.palette.primary.dark,
      },
    },
  },
  icon: {
    minWidth: '2em',
    '& svg': {
      fill: theme.palette.secondary.light,
      width: '0.7em',
      height: '0.7em',
    },
  },
  iconArrowSubMenu: {
    minWidth: 'inherit',
    '& svg': {
      fill: theme.palette.primary.main,
      width: '0.6em',
      height: '0.6em',
    },
  },
  iconSubMenu: {
    '& svg': {
      fill: theme.palette.primary.main,
    },
  },
  link: {
    color: theme.palette.secondary.light,
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
