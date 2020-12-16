import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Card as CardMaterial,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { ChatBubbleRounded, CreateNewFolder, Favorite } from '@material-ui/icons';
import { openShotModal } from 'store/userData';
import { Shot, User } from 'store/userData/types';
import { createShotModalId } from 'helpers/modal';
import { CardTypes } from './types';
import { useClasses } from './styles';

const Card = ({ user, shot, styles, isFooterExist }: CardTypes): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { name, avatar } = user as User;
  const { shotId, title, images } = shot as Shot;

  const handleOpenShotModal = useCallback(
    (id: string) => () => {
      dispatch(openShotModal(id));
    },
    [],
  );

  return (
    <Grid container className={styles}>
      <CardMaterial variant="outlined" className={classes.card}>
        <CardActionArea
          component="div"
          onClick={handleOpenShotModal(createShotModalId(shotId, title))}
        >
          <CardMedia
            component="img"
            alt={title}
            image={images.normal}
            title={title}
            className={classes.cardImg}
          />
          <CardContent className={classes.cardContent}>
            <Typography color="secondary" className={classes.cardTitle}>
              {title}
            </Typography>
            <div className={classes.iconsGroup}>
              <IconButton>
                <CreateNewFolder />
              </IconButton>
              <IconButton>
                <Favorite />
              </IconButton>
            </div>
          </CardContent>
        </CardActionArea>
      </CardMaterial>
      {isFooterExist && (
        <Grid container className={classes.cardFooter}>
          <Grid className={classes.containerFooter}>
            <Avatar alt={name} src={avatar} className={classes.avatar} />
            <Typography variant="h6" className={classes.userName}>
              {name}
            </Typography>
          </Grid>
          <Grid className={classes.containerFooter}>
            <IconButton className={classes.iconFooter}>
              <ChatBubbleRounded />
              <Typography variant="subtitle2" component="span">
                0
              </Typography>
            </IconButton>
            <IconButton className={classes.iconFooter}>
              <Favorite />
              <Typography variant="subtitle2" component="span">
                0
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Card;
