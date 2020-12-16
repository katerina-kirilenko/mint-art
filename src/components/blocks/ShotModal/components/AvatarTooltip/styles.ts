import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  root: {
    padding: 12,
  },
  userContainer: {
    justifyContent: 'space-between',
  },
  avatar: {
    marginRight: 16,
    width: 54,
    height: 54,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '0.9rem',
    color: palette.text.secondary,
    fontWeight: 400,
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
  },
  btnContainer: {
    flex: '1 1 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btnFollow: {
    backgroundColor: fade(palette.text.primary, 0.05),
    fontSize: '0.9rem',
    padding: '6px 14px',
    '&:hover': {
      backgroundColor: fade(palette.text.primary, 0.1),
    },
  },
  shotContainer: {
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 12,
  },
  shot: {
    width: '120px',
    height: '100px',
    overflow: 'hidden',
    borderRadius: 8,
    '& img': {
      height: '100%',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '&:not(:first-child)': {
      marginLeft: 16,
    },
  },
}));
