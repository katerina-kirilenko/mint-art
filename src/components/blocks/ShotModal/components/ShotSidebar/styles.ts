import { makeStyles, Theme, fade } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'constants/themes';

export const useClasses = makeStyles(({ palette, transitions }: Theme) => ({
  sidebarWrapper: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    top: '52px',
    right: 'auto',
    height: 'calc(100% - 52px)',
    overflowY: 'visible',
  },
  transitionDrawer: {
    transitionDelay: '400ms !important',
  },
  contentOverflow: {
    overflowY: 'auto',
    padding: '30px 40px 120px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    opacity: 1,
    transition: transitions.create('opacity'),
  },
  hideContent: {
    opacity: 0,
  },
  closeBtn: {
    position: 'absolute',
    top: '38px',
    left: '-14px',
    backgroundColor: palette.background.default,
    border: `1px solid ${palette.grey[300]}`,
    padding: '4px',
    transition: transitions.create('all'),
    '& svg': {
      width: 18,
      height: 18,
      fill: palette.grey[500],
    },
    '&:hover': {
      backgroundColor: palette.background.default,
      borderColor: palette.grey[500],
    },
    '&:hover svg': {
      fill: palette.grey[700],
    },
  },
  iconButton: {
    backgroundColor: palette.background.default,
    border: `1px solid ${palette.divider}`,
    borderRadius: 8,
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
      backgroundColor: palette.background.default,
      borderColor: fade(palette.grey[500], 0.5),
    },
    '&:active': {
      backgroundColor: palette.divider,
      borderColor: 'transparent',
    },
    '&:not(:last-child)': {
      marginRight: '12px',
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
  iconShare: {
    transform: 'scale(-1, 1)',
  },
  iconDetails: {
    lineHeight: '1rem',
    '& span': {
      color: palette.text.primary,
      fontSize: '14px',
    },
    '& svg': {
      marginRight: 7,
    },
  },
  sidebarActions: {
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  comments: {
    flexDirection: 'column',
  },
  comment: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: 0,
    '&:not(:last-child)': {
      marginRight: '12px',
    },
  },
  commentContent: {
    flex: '1 1 auto',
  },
  authorAvatar: {
    width: 32,
    height: 32,
    marginRight: '12px',
    '& svg': {
      width: 22,
      height: 22,
    },
  },
  commentAuthor: {
    fontSize: '16px',
    fontWeight: 600,
  },
  commentText: {
    fontSize: '14px',
    color: palette.text.primary,
  },
  commentData: {
    fontSize: '12px',
    color: palette.text.secondary,
  },
  commentMore: {
    paddingLeft: 10,
  },
}));
