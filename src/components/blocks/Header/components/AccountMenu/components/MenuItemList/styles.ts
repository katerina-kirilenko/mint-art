import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  widget: {
    padding: 0,
    backgroundColor: palette.background.paper,
    borderRadius: '8px',
    boxShadow: '0px 10px 50px rgba(0,0,0,0.15)',
    maxWidth: 'inherit',
  },
  widgetArrow: {
    color: palette.background.paper,
  },
  placementLeft: {
    margin: '0 -10px',
  },
}));
