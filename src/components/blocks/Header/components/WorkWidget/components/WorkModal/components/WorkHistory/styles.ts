import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  accordionDetails: {
    padding: '0 0 22px 0',
  },
  container: {
    padding: 0,
    '&:not(:last-child)': {
      padding: '0 0 16px 0',
    },
  },
  divider: {
    margin: '5px 0 22px',
  },
  flex: {
    flex: '1 1 auto',
  },
  at: {
    padding: '0 10px',
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: 500,
    lineHeight: '20px',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '0.85rem',
    lineHeight: '10px',
    color: palette.grey[500],
  },
  input: {
    margin: '4px 0',
    width: '100%',
  },
  maxWidth: {
    maxWidth: '210px',
  },
  select: {
    width: '100%',
  },
  popover: {
    '& li': {
      fontSize: '0.8rem',
    },
  },
}));
