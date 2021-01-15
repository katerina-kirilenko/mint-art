import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  filtersPanel: {
    marginTop: '1rem',
    transition: transitions.create('all'),
    justifyContent: 'space-between',
    '& > fieldset': {
      flex: '1 1 auto',
      maxWidth: '23%',
    },
  },
  controlLabel: {
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: '8px',
  },
  input: {
    '& input': {
      paddingLeft: '4px',
    },
    '& svg': {
      fill: palette.grey[500],
    },
  },
  selectFilter: {
    '&& div': {
      paddingRight: '40px',
    },
    '&& svg': {
      top: 'auto',
    },
  },
  popover: {
    marginTop: '5px',
    maxWidth: '23%',
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
}));
