import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, breakpoints }) => ({
  pagination: {
    fontSize: '1rem',
    listStyle: 'none',
    paddingLeft: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  paginationItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationItemLink: {
    margin: '3px 5px',
    padding: '6px 8px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    letterSpacing: '1px',
    lineHeight: '1rem',
    fontWeight: 500,
    color: palette.text.secondary,
    cursor: 'pointer',
    transition: '0.25s ease 0s',
    '&:hover': {
      color: palette.primary.main,
      textDecoration: 'none',
    },
    [breakpoints.down(500)]: {
      fontSize: '0.8rem',
      padding: '4px 8px',
    },
  },
  current: {
    '& a': {
      color: palette.primary.main,
    },
  },
  inactive: {
    '& a': {
      cursor: 'default',
      '&:hover': {
        color: palette.text.secondary,
      },
    },
  },
}));
