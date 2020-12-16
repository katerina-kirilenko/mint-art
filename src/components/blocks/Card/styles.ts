import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  card: {
    borderRadius: 8,
    border: 'none',
    '& img': {
      transition: transitions.create(['filter']),
    },
    '&:hover img': {
      filter: 'brightness(70%)',
    },
    '&:hover $cardContent': {
      display: 'flex',
    },
  },
  cardContent: {
    display: 'none',
    padding: 16,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cardImg: {
    height: '260px',
    minWidth: '100%',
  },
  iconsGroup: {
    display: 'flex',
    '& button': {
      borderRadius: 8,
      background: '#f3f3f4',
      width: 34,
      height: 34,
    },
    '& button:not(:last-child)': {
      marginRight: 12,
    },
    '& button:hover': {
      background: '#e7e7e9',
      '& svg': {
        fill: palette.primary.main,
      },
    },
    '& svg': {
      width: 20,
      height: 20,
      fill: palette.secondary.main,
    },
  },
  avatar: {
    width: 24,
    height: 24,
  },
  cardFooter: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  containerFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: '1rem',
    paddingLeft: 10,
  },
  iconFooter: {
    padding: 0,
    '&:not(:last-child)': {
      marginRight: 8,
    },
    '& svg': {
      width: 16,
      height: 16,
      fill: palette.grey[500],
    },
    '& span': {
      paddingLeft: 4,
      fontSize: '0.8rem',
    },
    '&:hover': {
      background: 'none',
    },
    '&:hover svg': {
      fill: palette.primary.main,
    },
  },
}));
