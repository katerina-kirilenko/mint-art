import { makeStyles, Theme } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ palette, breakpoints, spacing }: Theme) => ({
  header: {
    flexGrow: 1,
    borderBottom: `1px solid ${palette.grey[200]}`,
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
    color: palette.grey[500],
  },
  badge: {
    '& span': {
      color: '#fff',
      backgroundColor: palette.grey[700],
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
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  },
  input: {
    '& input': {
      paddingLeft: '4px',
    },
    '& svg': {
      fill: palette.grey[500],
    },
  },
  widget: {
    backgroundColor: '#fff',
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
  workWidget: {
    fontSize: '1rem',
    lineHeight: '1rem',
    padding: '26px 20px 20px',
  },
  accountWidget: {
    fontSize: '1rem',
    lineHeight: '1.2rem',
    padding: '0',
  },
}));
