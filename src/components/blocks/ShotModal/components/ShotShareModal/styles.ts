import { makeStyles, fade, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  shareModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    maxWidth: '480px',
    borderRadius: '12px',
    overflowY: 'initial',
    marginTop: '42px',
  },
  header: {
    padding: '0 64px',
    background: fade(palette.text.primary, 0.1),
  },
  imageWrapper: {
    width: '100%',
    position: 'relative',
    top: '-40px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0px 0px 20px 20px rgba(0,0,0,0.05)',
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
    '& img:before': {
      content: ' ',
      display: 'block',
      paddingTop: '75%',
    },
  },
  content: {
    padding: '24px 40px 38px',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '29px',
    marginBottom: '24px',
    textAlign: 'center',
  },
  socialIcons: {
    justifyContent: 'center',
    marginBottom: '32px',
  },
  socialIcon: {
    margin: '0 12px',
    padding: '22px',
    transition: transitions.create('all'),
  },
  pinterest: {
    background: '#fcf3f4',
    color: '#bd081c',
    '&:hover': {
      background: '#f8e6e8',
      color: '#ca3949',
    },
  },
  twitter: {
    background: '#f4fafe',
    color: '#1da1f2',
    '&:hover': {
      background: '#e8f6fe',
      color: '#4ab4f5',
    },
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabel: {
    fontSize: '0.8rem',
    color: palette.text.secondary,
    marginBottom: '10px',
  },
  textField: {
    fontSize: '0.9rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: palette.text.secondary,
    '&&& fieldset': {
      borderColor: 'transparent',
    },
  },
  input: {
    padding: '10px 64px 10px 16px',
    height: 'auto',
    '&:hover': {
      cursor: 'text',
    },
  },
  inputButton: {
    color: palette.primary.main,
    fontWeight: 400,
    lineHeight: '1.5',
    position: 'absolute',
    right: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      filter: 'brightness(110%)',
    },
  },
  snackBarRoot: {
    transform: 'translateX(-50%) !important',
    borderRadius: '8px',
    backgroundColor: palette.text.primary,
  },
  anchorSnackBar: {
    bottom: '72px',
    maxWidth: '420px',
  },
  snackBarContent: {
    padding: '24px',
    flexWrap: 'nowrap',
    borderRadius: '8px',
    backgroundColor: palette.text.primary,
  },
  snackBarText: {
    marginLeft: 10,
    '& h6': {
      fontSize: '1rem',
      paddingBottom: 5,
    },
    '& p': {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: fade(palette.background.default, 0.8),
    },
  },
  snackBarMessage: {
    padding: 0,
    display: 'flex',
    flexWrap: 'nowrap',
  },
  snackBarAction: {
    marginRight: 0,
    position: 'absolute',
    top: '12px',
    right: '12px',
  },
}));
