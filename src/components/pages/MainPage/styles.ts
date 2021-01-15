import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  container: {
    flex: '1 0 auto',
    maxWidth: '1240px',
    padding: '20px',
  },
  wrapFilters: {
    justifyContent: 'space-between',
    padding: '14px 0',
  },
  wrapContent: {
    paddingTop: '26px',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  buttonGroup: {
    width: 'auto',
    justifyContent: 'space-between',
  },
  btnTag: {
    padding: 0,
    '& span': {
      color: fade(palette.text.primary, 0.8),
      padding: '4px 8px',
      fontSize: '0.9rem',
      transition: transitions.create('all'),
      borderRadius: '8px',
      '&:hover': {
        fontWeight: 600,
        backgroundColor: 'transparent',
      },
    },
    '&:not(:last-child)': {
      marginRight: '6px',
    },
  },
  btnTagActive: {
    '& span': {
      fontWeight: 600,
      backgroundColor: fade(palette.text.primary, 0.05),
      '&:hover': {
        backgroundColor: fade(palette.text.primary, 0.05),
      },
    },
  },
  selectFilter: {
    maxWidth: '200px',
    '&& div': {
      paddingRight: '40px',
    },
    '&& svg': {
      top: 'auto',
    },
  },
  btnFilter: {
    borderColor: fade(palette.text.primary, 0.1),
  },
  btnFilterActive: {
    backgroundColor: fade(palette.text.primary, 0.1),
    borderColor: 'transparent',
  },
  titleContent: {
    fontWeight: 700,
    lineHeight: '1.6',
  },
  popover: {
    marginTop: '5px',
    maxWidth: '40%',
    '& li': {
      fontSize: '0.9rem',
      display: 'flex',
      flexWrap: 'wrap',
      whiteSpace: 'break-spaces',
    },
    '& li:first-child': {
      fontWeight: 500,
      color: palette.primary.main,
    },
  },
  cardsContainer: {
    padding: '1.2rem 0',
    justifyContent: 'space-between',
  },
}));
