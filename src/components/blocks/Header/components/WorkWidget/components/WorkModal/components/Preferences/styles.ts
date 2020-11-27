import { makeStyles, Theme } from '@material-ui/core/styles';
import check from 'assets/header/check-white.svg';

export const useClasses = makeStyles((theme: Theme) => ({
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
    background: '#fff',
    border: `1px solid ${theme.palette.grey[300]}`,
    outline: 'none',
    transition: 'box-shadow 200ms ease, background 200ms ease, border 200ms ease',
  },
  checkedIcon: {
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  check: {
    marginRight: '0.75rem',
    '&:hover': {
      backgroundColor: 'rgba(58, 175, 169, 0.1)',
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
