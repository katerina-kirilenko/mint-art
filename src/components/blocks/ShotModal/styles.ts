import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'constants/themes';

export const useClasses = makeStyles(({ palette, breakpoints, transitions }: Theme) => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: 'transparent',
  },
  appBar: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '64px',
    paddingBottom: '42px',
    overflowY: 'scroll',
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    transition: transitions.create(['margin', 'padding'], {
      easing: transitions.easing.sharp,
      duration: '700ms',
    }),
    marginRight: -DRAWER_WIDTH,
    marginLeft: '140px',
    paddingRight: '140px',
    paddingLeft: 0,
  },
  contentShift: {
    transition: transitions.create(['margin', 'padding'], {
      easing: transitions.easing.easeOut,
      duration: '600ms',
      delay: 400,
    }),
    marginRight: 0,
    marginLeft: '40px',
    paddingLeft: 0,
    paddingRight: '40px',
  },
  shotHeader: {
    padding: '0 1rem',
    justifyContent: 'space-between',
    maxWidth: '98vh',
    margin: '0 auto',
  },
  avatarHeader: {
    marginRight: 16,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '0.9rem',
    color: palette.text.secondary,
    fontWeight: 400,
    '& a:hover': {
      color: palette.primary.main,
      textDecoration: 'none',
    },
  },
  dividerDot: {
    margin: '0 8px',
    color: palette.text.secondary,
  },
  headerButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    '& button': {
      backgroundColor: fade(palette.text.primary, 0.05),
      fontSize: '0.9rem',
      padding: '8px 20px',

      '&:hover': {
        backgroundColor: fade(palette.text.primary, 0.1),
      },
      '&:not(:first-child)': {
        marginLeft: 12,
      },
      '& svg': {
        height: 13,
        width: 13,
        marginRight: 4,
      },
    },
    '& $likedButton': {
      backgroundColor: fade(palette.primary.main, 0.1),
      '&:hover': {
        backgroundColor: fade(palette.primary.main, 0.3),
      },
    },
  },
  likedButton: {
    color: palette.primary.main,
    '& svg': {
      fill: palette.primary.main,
    },
  },
  shotDescription: {
    padding: '0 1rem',
    fontSize: '20px',
    lineHeight: '32px',
    justifyContent: 'flex-start',
    maxWidth: '98vh',
    margin: '0 auto',
    marginTop: 56,
  },
  progress: {
    marginTop: '35vh',
  },
  shotMedia: {
    position: 'relative',
    maxWidth: '98vh',
    minWidth: '320px',
    width: '100%',
    margin: '40px 0 0',
    background: palette.grey[500],
    borderRadius: 8,
    overflow: 'hidden',
    '&:hover': {
      cursor: 'zoom-in',
      '& $paletteContainer': {
        opacity: 1,
      },
    },
  },
  paletteContainer: {
    opacity: 0,
    display: 'flex',
    padding: '0 14px',
    borderRadius: '50px',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: '24px',
    left: '20px',
    height: '48px',
    width: '48px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px 2px rgba(0,0,0, 0.05)',
    transition: 'opacity 200ms ease, width 200ms ease',
    '&:hover': {
      width: '318px',
      cursor: 'default',
      '& $palette': {
        opacity: 1,
      },
    },
    '& button': {
      padding: 0,
      '&:hover': {
        cursor: 'default',
        backgroundColor: '#fff',
      },
    },
  },
  paletteIcon: {
    '& svg': {
      width: '22px',
      height: '22px',
      flexShrink: 0,
    },
  },
  palette: {
    marginLeft: '14px',
    paddingRight: '14px',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    transition: 'opacity 200ms ease',
  },
  userDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100vh',
    margin: '0 auto',
    marginTop: 70,
  },
  avatarContainer: {
    marginBottom: '1rem',
    flexWrap: 'nowrap',
  },
  divider: {
    height: '2px',
    backgroundColor: palette.divider,
    width: '100%',
  },
  detailsAvatar: {
    width: '72px',
    height: '72px',
    margin: '0 2rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  avatarSubtitle: {
    fontSize: '0.9rem',
    fontWeight: 400,
    color: palette.text.secondary,
    marginTop: 10,
  },
  userSection: {
    justifyContent: 'space-between',
    maxWidth: '98vh',
    margin: '0 auto',
    marginTop: 64,
  },
  cardsContainer: {
    padding: '1.2rem 0',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '100%',
    maxWidth: '23%',
    marginBottom: '3rem',
    '& img': {
      height: 'auto',
    },
    [breakpoints.down(1200)]: {
      maxWidth: '46%',
    },
    [breakpoints.down(800)]: {
      maxWidth: '100%',
    },
  },
  sectionTitle: {
    width: '100%',
    fontWeight: 700,
  },
  sectionLink: {
    alignSelf: 'flex-end',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  otherWorks: {
    maxWidth: '98vh',
    margin: '0 auto',
    marginTop: 80,
  },
  widget: {
    backgroundColor: palette.background.paper,
    borderRadius: '8px',
    boxShadow: '0px 2px 30px rgba(0,0,0,0.2)',
    maxWidth: 'inherit',
  },
  widgetArrow: {
    color: palette.background.paper,
  },
  widgetMargin: {
    margin: '10px 0',
  },
  shotSidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  },
}));
