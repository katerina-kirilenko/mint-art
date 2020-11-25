import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  widget: {
    padding: 0,

    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 10px 50px rgba(0,0,0,0.15)',
    maxWidth: 'inherit',
  },
  widgetArrow: {
    color: '#fff',
  },
  placementLeft: {
    margin: '0 -10px',
  },
}));
