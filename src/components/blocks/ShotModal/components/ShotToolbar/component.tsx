import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Avatar, Badge, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import {
  ChatBubbleRounded,
  CreateNewFolder,
  Favorite,
  InfoRounded,
  ReplyRounded,
} from '@material-ui/icons';
import { selectUserData } from 'store/userData';
import { User } from 'store/userData/types';
import { ToolbarProps } from './types';
import { useClasses } from './styles';

const ShotToolbar = ({
  cardOffsetTop,
  isLikedShot,
  isVisibleOpenSidebar,
  handleClickShareButton,
  handleClickFeedback,
  handleClickLike,
}: ToolbarProps): ReactElement => {
  const classes = useClasses();

  const { user } = useSelector(selectUserData);
  const { avatar, name } = user || ({} as User);

  const isShowEditionalIcons = cardOffsetTop ? cardOffsetTop < 50 : null;

  return (
    <section className={classes.toolbarWrapper}>
      <Grid
        container
        className={clsx(classes.toolbar, {
          [classes.animationToolbar]: isVisibleOpenSidebar,
        })}
      >
        <Avatar alt={name} src={avatar} className={classes.avatar} />
        <Tooltip
          title={
            <Typography variant="subtitle2" component="span" className={classes.tooltipTitle}>
              Feedback
            </Typography>
          }
          placement="left-start"
          arrow
          classes={{
            tooltip: classes.widget,
            arrow: classes.widgetArrow,
          }}
        >
          <Badge
            badgeContent={0}
            showZero
            classes={{
              badge: classes.feedbackBadge,
            }}
          >
            <IconButton
              disableRipple
              aria-label="feedback"
              className={classes.iconButton}
              onClick={handleClickFeedback}
            >
              <ChatBubbleRounded />
            </IconButton>
          </Badge>
        </Tooltip>
        <Tooltip
          title={
            <Typography variant="subtitle2" component="span" className={classes.tooltipTitle}>
              Share
            </Typography>
          }
          placement="left"
          arrow
          classes={{
            tooltip: classes.widget,
            arrow: classes.widgetArrow,
          }}
        >
          <IconButton
            disableRipple
            aria-label="share"
            className={clsx(classes.iconButton, classes.iconShare)}
            onClick={handleClickShareButton}
          >
            <ReplyRounded />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={
            <Typography variant="subtitle2" component="span" className={classes.tooltipTitle}>
              Shot details
            </Typography>
          }
          placement="left"
          arrow
          classes={{
            tooltip: classes.widget,
            arrow: classes.widgetArrow,
          }}
        >
          <IconButton disableRipple aria-label="info" className={classes.iconButton}>
            <InfoRounded />
          </IconButton>
        </Tooltip>
        {isShowEditionalIcons && (
          <div className={classes.editionalIcons}>
            <Tooltip
              title={
                <Typography variant="subtitle2" component="span" className={classes.tooltipTitle}>
                  Save
                </Typography>
              }
              placement="left"
              arrow
              classes={{
                tooltip: classes.widget,
                arrow: classes.widgetArrow,
              }}
            >
              <IconButton disableRipple aria-label="save" className={classes.iconButton}>
                <CreateNewFolder />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={
                <Typography variant="subtitle2" component="span" className={classes.tooltipTitle}>
                  Like
                </Typography>
              }
              placement="left"
              arrow
              classes={{
                tooltip: classes.widget,
                arrow: classes.widgetArrow,
              }}
            >
              <IconButton
                disableRipple
                aria-label="like"
                className={clsx(classes.iconButton, { [classes.likedButton]: isLikedShot })}
                onClick={handleClickLike}
              >
                <Favorite />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </Grid>
    </section>
  );
};

export default ShotToolbar;
