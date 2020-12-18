import { makeStyles, Theme, fade } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  shotSidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  },
  avatar: {
    marginBottom: '1rem',
  },
  toolbarWrapper: {
    position: 'fixed',
    height: '100%',
    paddingTop: '64px',
  },
  toolbar: {
    position: 'fixed',
    right: 70,
    width: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  widget: {
    backgroundColor: fade(palette.text.primary, 0.9),
    border: `1px solid ${fade(palette.text.primary, 0.9)}`,
    borderRadius: 4,
    boxShadow: 'none',
    padding: '6px 12px',
  },
  widgetArrow: {
    color: fade(palette.text.primary, 0.9),
    top: '8px !important',
  },
  tooltipTitle: {
    fontSize: '14px',
    fontWeight: 400,
    color: palette.background.default,
  },
  iconButton: {
    border: `1px solid ${palette.divider}`,
    borderRadius: 8,
    marginBottom: '1rem',
    padding: '10px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    transition: transitions.create('all'),
    '& svg': {
      width: 18,
      height: 18,
      verticalAlign: 'middle',
      fill: fade(palette.text.primary, 0.9),
    },
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: fade(palette.grey[500], 0.5),
    },
    '&:active': {
      backgroundColor: palette.divider,
      borderColor: 'transparent',
    },
  },
  likedButton: {
    backgroundColor: fade(palette.primary.main, 0.1),
    borderColor: 'transparent',
    '& svg': {
      fill: palette.primary.main,
    },
    '&:hover': {
      backgroundColor: fade(palette.primary.main, 0.3),
      borderColor: 'transparent',
    },
  },
  feedbackBadge: {
    borderRadius: '50%',
    backgroundColor: palette.background.paper,
    border: `1px solid ${palette.divider}`,
    boxShadow: `0px 2px 6px ${fade(palette.grey[700], 0.4)}`,
    minWidth: '20px',
    lineHeight: '18px',
    fontSize: '12px',
    padding: '0 4px',
  },
  iconShare: {
    transform: 'scale(-1, 1)',
  },
  editionalIcons: {
    display: 'flex',
    flexDirection: 'column',
    animation: '$showIcons .8s ease-in-out',
  },
  '@keyframes showIcons': {
    '0%': {
      transform: 'translate(0, -100px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translate(0)',
      opacity: 1,
    },
  },
}));
