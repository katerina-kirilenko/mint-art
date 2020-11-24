import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles((theme: Theme) => ({
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
      color: theme.palette.secondary.main,
      transition: theme.transitions.create('all'),
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.secondary.dark,
        fontWeight: 500,
        '& svg': {
          fill: theme.palette.secondary.dark,
        },
      },
    },
  },
  arrowMore: {
    fill: theme.palette.secondary.light,
  },
  navDropdown: {
    width: '100vw',
    backgroundColor: '#fff',
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
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.secondary.light,
        fontWeight: 500,
      },
    },
  },
}));
