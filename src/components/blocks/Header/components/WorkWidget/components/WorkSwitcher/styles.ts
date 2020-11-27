import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

export const WorkSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 32,
      height: 18,
      padding: 0,
      margin: '0 10px',
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(14px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none',
      color: '#fff',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 9,
      opacity: 1,
      backgroundColor: theme.palette.grey[500],
    },
    checked: {},
  }),
)(Switch);

export const useClasses = makeStyles((theme: Theme) => ({
  label: {
    fontSize: '1rem',
    lineHeight: 'inherit',
    fontWeight: 500,
    color: theme.palette.grey[500],
  },
  labelActive: {
    color: theme.palette.secondary.main,
  },
}));
