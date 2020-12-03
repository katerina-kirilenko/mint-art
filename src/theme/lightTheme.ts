import { createMuiTheme } from '@material-ui/core/styles';
import { LIGHT } from 'constants/themes';
import colors from './colors';

export const lightTheme = createMuiTheme({
  palette: {
    type: LIGHT,
    background: { paper: '#fff', default: colors.light },
    primary: {
      light: 'rgba(114, 225, 219, 1)',
      main: 'rgba(58, 175, 169, 1)',
      dark: 'rgba(0, 127, 122, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(71, 80, 92, 1)',
      main: 'rgba(31, 40, 51, 1)',
      dark: 'rgba(0, 0, 12, 1)',
      contrastText: '#fff',
    },
    error: {
      light: 'rgba(255, 80, 48, 1)',
      main: 'rgba(231, 32, 13, 1)',
      dark: 'rgba(149, 0, 0, 1)',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Asap, Roboto, sans-serif',
    fontSize: 16,
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
    MuiButton: {
      root: { borderRadius: '8px', textTransform: 'none' },
    },
    MuiTooltip: {
      tooltip: {
        color: colors.dark,
      },
    },
    MuiGrid: {
      container: {
        alignItems: 'center',
      },
    },
    MuiDialog: {
      paper: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        display: 'block',
      },
    },
  },
});
