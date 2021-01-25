import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  header: {
    flexGrow: 1,
    width: '100%',
    borderBottom: `1px solid ${palette.divider}`,
  },
  topBar: {
    boxShadow: 'none',
    backgroundColor: palette.background.default,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1rem',
    minHeight: 'auto',
  },
  gridContainer: {
    width: 'auto',
  },
  iconBrightness: {
    marginLeft: '1rem',
    padding: '6px 7px',
    color: palette.text.secondary,
  },
}));
