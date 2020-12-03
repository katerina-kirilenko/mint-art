import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

export const WorkSwitch = withStyles(({ palette }: Theme) =>
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
      color: palette.grey[500],
      '&$checked': {
        transform: 'translateX(14px)',
        color: palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: palette.primary.main,
          borderColor: palette.primary.main,
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none',
      color: palette.background.paper,
    },
    track: {
      border: `1px solid ${palette.grey[500]}`,
      borderRadius: 9,
      opacity: 1,
      backgroundColor: palette.grey[500],
    },
    checked: {},
  }),
)(Switch);

export const useClasses = makeStyles(({ palette }: Theme) => ({
  label: {
    fontSize: '1rem',
    lineHeight: 'inherit',
    fontWeight: 500,
    color: palette.grey[500],
  },
  labelActive: {
    color: palette.text.primary,
  },
  container: {
    width: 'auto',
  },
}));
