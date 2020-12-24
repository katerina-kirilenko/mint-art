import React, { ReactElement } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
  Zoom,
} from '@material-ui/core';
import {
  CreateNewFolder,
  Close,
  Favorite,
  InfoRounded,
  ReplyRounded,
  Person,
  MoreHoriz,
} from '@material-ui/icons';
import { comments } from 'components/blocks/ShotModal/comments';
import { SidebarProps } from './types';
import { useClasses } from './styles';

const ShotSidebar = ({
  isVisibleOpenSidebar,
  isLikedShot,
  handleClickShareButton,
  handleCloseSidebar,
  handleClickLike,
}: SidebarProps): ReactElement => {
  const classes = useClasses();

  return (
    <Drawer
      open={isVisibleOpenSidebar}
      className={classes.sidebarWrapper}
      transitionDuration={600}
      variant="persistent"
      anchor="right"
      classes={{
        paper: clsx(classes.drawerPaper, { [classes.transitionDrawer]: isVisibleOpenSidebar }),
      }}
    >
      <Zoom in={isVisibleOpenSidebar}>
        <IconButton
          disableRipple
          aria-label="close"
          onClick={handleCloseSidebar}
          className={classes.closeBtn}
        >
          <Close />
        </IconButton>
      </Zoom>

      <div
        className={clsx(classes.contentOverflow, { [classes.hideContent]: !isVisibleOpenSidebar })}
      >
        <Grid container className={classes.sidebarActions}>
          <div>
            <IconButton
              disableRipple
              aria-label="share"
              className={clsx(classes.iconButton, classes.iconShare)}
              onClick={handleClickShareButton}
            >
              <ReplyRounded />
            </IconButton>

            <IconButton disableRipple aria-label="save" className={classes.iconButton}>
              <CreateNewFolder />
            </IconButton>

            <IconButton
              disableRipple
              aria-label="like"
              className={clsx(classes.iconButton, { [classes.likedButton]: isLikedShot })}
              onClick={handleClickLike}
            >
              <Favorite />
            </IconButton>
          </div>

          <IconButton
            disableRipple
            aria-label="info"
            className={clsx(classes.iconButton, classes.iconDetails)}
          >
            <InfoRounded />
            <Typography variant="subtitle2" component="span">
              Details
            </Typography>
          </IconButton>
        </Grid>

        <Grid container>
          <Typography variant="h6">Feedback</Typography>
          <Grid container className={classes.comments}>
            <List>
              {comments.map(({ id, data, author, text }) => (
                <ListItem key={id} className={classes.comment}>
                  <Avatar className={classes.authorAvatar}>
                    <Person />
                  </Avatar>
                  <Grid className={classes.commentContent}>
                    <Typography className={classes.commentAuthor} variant="h6">
                      {author}
                    </Typography>
                    <Typography className={classes.commentText} variant="subtitle1">
                      {text}
                    </Typography>
                    <Typography
                      className={classes.commentData}
                      variant="subtitle2"
                      component="span"
                    >
                      {data}
                    </Typography>
                  </Grid>
                  <MoreHoriz className={classes.commentMore} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

export default ShotSidebar;
