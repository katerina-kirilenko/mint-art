import { makeStyles, Theme, fade } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles((theme: Theme) => ({
  header: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  topBar: {
    boxShadow: 'none',
    backgroundColor: colors.light,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1rem',
    minHeight: 'auto',
  },
  gridContainer: {
    width: 'auto',
  },
  icon: {
    padding: '6px 7px',
    color: theme.palette.grey[500],
  },
  badge: {
    '& span': {
      color: '#fff',
      backgroundColor: theme.palette.grey[700],
      border: '1px solid #fff',
      padding: 0,
      height: '16px',
      fontSize: ' 0.7rem',
      minWidth: '16px',
    },
  },
  account: {
    margin: '0 10px',
  },
  search: {
    position: 'relative',
    marginRight: '12px',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: '0px 10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fill: theme.palette.grey[500],
    },
  },
  inputRoot: {
    borderRadius: '8px',
    color: theme.palette.grey[700],
    border: `1px solid ${theme.palette.grey[300]}`,
    transition: theme.transitions.create('all'),
    '&:hover': {
      boxShadow: `0 0 0 4px ${fade(theme.palette.primary.main, 0.1)}`,
    },
    '&:focus': {
      border: 'none',
    },
  },
  inputInput: {
    borderRadius: '8px',
    padding: theme.spacing(0.8, 1, 0.8, 5.4),
    width: '100%',
    border: '1px solid transparent',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        border: `1px solid ${theme.palette.primary.light}`,
        boxShadow: `0 0 0 4px ${fade(theme.palette.primary.main, 0.1)}`,
      },
    },
  },
  widget: {
    backgroundColor: '#fff',
    fontSize: '1rem',
    lineHeight: '1.2rem',
    padding: '26px 20px 20px',
    borderRadius: '8px',
    boxShadow: '0px 10px 50px rgba(0,0,0,0.15)',
    maxWidth: 'inherit',
  },
  widgetArrow: {
    color: '#fff',
  },
  widgetMargin: {
    margin: '10px 0',
  },
}));
