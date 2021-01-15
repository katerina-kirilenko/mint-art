import React, { ReactElement } from 'react';
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
import { User } from 'store/usersData/types';
import { useClasses } from './styles';

const Card = (user: User): ReactElement => {
  const classes = useClasses();
  const { shots, avatar, name } = user;

  return (
    <Grid container className={classes.cardContainer}>
      <CardMaterial variant="outlined" className={classes.card}>
        {shots.map(({ id, title, image }) => {
          return (
            <CardActionArea component="div" key={id}>
              <CardMedia
                component="img"
                alt={title}
                image={image}
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
          );
        })}
      </CardMaterial>
      <Grid container className={classes.cardFooter}>
        <Grid className={classes.containerFooter}>
          <Avatar alt={name} src={avatar} className={classes.avatar} />
          <Typography variant="h6" className={classes.userName}>
            {name}
          </Typography>
        </Grid>
        <Grid className={classes.containerFooter}>
          {shots.map(({ id, comments, likes }) => {
            return (
              <div key={id}>
                <IconButton className={classes.iconFooter}>
                  <ChatBubbleRounded />
                  <Typography variant="subtitle2" component="span">
                    {comments.length}
                  </Typography>
                </IconButton>
                <IconButton className={classes.iconFooter}>
                  <Favorite />
                  <Typography variant="subtitle2" component="span">
                    {likes}
                  </Typography>
                </IconButton>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Card;
