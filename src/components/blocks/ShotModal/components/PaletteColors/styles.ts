import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 0,
  },
  listItem: {
    width: 30,
    height: 30,
    padding: 0,
    transition: 'all 200ms ease',
    '&:first-child': {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    '&:last-child': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    '&:hover': {
      transform: 'scale(1.2)',
      zIndex: 999,
    },
  },
}));
