import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  tooltip: {
    padding: 0,
  },
  popper: {
    transform: 'translate3d(0px, 60px, 0px) !important',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
  },
  menuItem: {
    width: 'auto',
    padding: 0,
    margin: '0 0.5rem',
    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: palette.text.secondary,
      transition: transitions.create('all'),
      '&:hover': {
        textDecoration: 'none',
        color: palette.text.primary,
        fontWeight: 500,
        '& svg': {
          fill: palette.text.primary,
        },
      },
    },
  },
  arrowMore: {
    fill: palette.text.secondary,
  },
  navDropdown: {
    width: '100vw',
    backgroundColor: palette.background.paper,
    padding: '0 1rem',
    position: 'absolute',
    boxShadow: '0px 20px 35px rgba(0,0,0,0.1)',
  },
  menuList: {
    marginLeft: '1rem',
  },
  menuItemList: {
    padding: '12px',
    fontSize: '0.95rem',
    '& a': {
      color: palette.text.secondary,
      '&:hover': {
        textDecoration: 'none',
        color: palette.text.primary,
        fontWeight: 500,
      },
    },
  },
}));
