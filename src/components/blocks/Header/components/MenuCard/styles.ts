import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  card: {
    maxWidth: '200px',
    padding: '30px 8px',
    '& a': {
      '&:hover': {
        filter: 'none',
        textDecoration: 'none',
        '& p': {
          color: palette.text.primary,
        },
      },
    },
  },
  image: {
    position: 'relative',
    width: '140px',
    height: '105px',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& img': {
      position: 'absolute',
      height: '100px',
      borderRadius: '6px',
    },
  },
  description: {
    '& h6': {
      fontWeight: 500,
      marginBottom: '5px',
    },
    '& p': {
      color: palette.text.secondary,
      fontSize: '0.85rem',
    },
  },
}));
