import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, breakpoints }: Theme) => ({
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
    paddingTop: '64px',
    paddingBottom: '42px',
    overflowY: 'scroll',
    flex: 1,
  },
  contentContainer: {
    maxWidth: '98vh',
  },
  shotHeader: {
    padding: '0 1rem',
    justifyContent: 'space-between',
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
  },
  shotDescription: {
    marginTop: 56,
    padding: '0 1rem',
    fontSize: '20px',
    lineHeight: '32px',
    justifyContent: 'flex-start',
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
    marginTop: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 64,
    justifyContent: 'space-between',
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
}));
