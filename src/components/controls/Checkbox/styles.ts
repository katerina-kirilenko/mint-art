import { makeStyles, Theme } from '@material-ui/core/styles';
import check from 'assets/header/check-white.svg';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  icon: {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    padding: 0,
    position: 'relative',
    margin: '0',
    appearance: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: palette.background.paper,
    border: `1px solid ${palette.divider}`,
    outline: 'none',
    transition: 'box-shadow 200ms ease, background 200ms ease, border 200ms ease',
    '&:hover': {
      borderColor: palette.primary.main,
    },
  },
  checkedIcon: {
    background: palette.primary.main,
    borderColor: palette.primary.main,
  },
  check: {
    '&&:hover': {
      backgroundColor: 'rgba(58, 175, 169, 0.1)',
    },
    '&:hover $icon': {
      borderColor: palette.primary.main,
    },
    '& $checkedIcon::after': {
      content: 'close-quote',
      position: 'absolute',
      width: '12px',
      height: '12px',
      backgroundImage: `url(${check})`,
      backgroundRepeat: 'no-repeat',
    },
  },
}));
