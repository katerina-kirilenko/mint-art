import { fade, InputBase } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';

export const StyledInput = withStyles(({ palette, transitions, spacing }: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: spacing(3),
      },
    },
    input: {
      borderRadius: '8px',
      position: 'relative',
      backgroundColor: palette.background.paper,
      border: `1px solid ${palette.divider}`,
      fontSize: '1rem',
      padding: '10px 26px 10px 12px',
      transition: transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        borderColor: palette.primary.main,
        boxShadow: `0 0 0 4px ${fade(palette.primary.main, 0.1)}`,
      },
      '&:focus': {
        borderRadius: '8px',
        borderColor: palette.primary.main,
        boxShadow: `0 0 0 4px ${fade(palette.primary.main, 0.1)}`,
        backgroundColor: palette.background.paper,
      },
    },
  }),
)(InputBase);
