import React, { ReactElement, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { selectUserData, selectUserShots } from 'store/userData';
import { User } from 'store/userData/types';
import { useClasses } from './styles';

const AvatarTooltip = (): ReactElement => {
  const classes = useClasses();

  const { user } = useSelector(selectUserData);
  const { shotsByPage } = useSelector(selectUserShots);

  const { avatar, name, location } = user as User;

  const renderShots = useCallback(() => {
    return shotsByPage
      .filter((shot, idx) => idx < 3)
      .map((shot) => {
        return (
          <div key={shot.shotId} className={classes.shot}>
            <img src={shot.images.normal} alt={shot.title} />
          </div>
        );
      });
  }, [shotsByPage]);

  return (
    <div className={classes.root}>
      <Grid container className={classes.userContainer}>
        <Avatar alt={name} src={avatar} className={classes.avatar} />
        <Grid item className={classes.user}>
          <Typography variant="h6" component="span" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="subtitle2" component="span" className={classes.subtitle}>
            {location}
          </Typography>
        </Grid>
        <Grid item className={classes.btnContainer}>
          <Button className={classes.btnFollow}>+ Follow</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.shotContainer}>
        {renderShots()}
      </Grid>
    </div>
  );
};

export default AvatarTooltip;
