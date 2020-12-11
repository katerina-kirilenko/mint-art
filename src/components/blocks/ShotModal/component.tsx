import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Avatar,
  CardMedia,
  Dialog,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { closeShotModal, selectUserData, selectShotData, userShotRequest } from 'store/userData';
import { User } from 'store/userData/types';
import { ShotModalTypes } from './types';
import { useClasses } from './styles';

const ShotModal = ({ isOpen }: ShotModalTypes): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { user } = useSelector(selectUserData);
  const { shot } = useSelector(selectShotData);

  const { avatar, name } = user as User;

  useEffect(() => {
    dispatch(userShotRequest());
  }, []);

  const handleCloseShotModal = useCallback(() => {
    dispatch(closeShotModal());
  }, []);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleCloseShotModal}
      classes={{
        root: classes.root,
        paper: classes.dialogContainer,
      }}
    >
      <AppBar className={classes.appBar} position="relative" elevation={0}>
        <IconButton color="inherit" onClick={handleCloseShotModal} aria-label="close">
          <Close />
        </IconButton>
      </AppBar>
      <Paper className={classes.content}>
        <div className="shotHeader">
          <Avatar alt={name} src={avatar} />
          <Typography>{name}</Typography>
        </div>
        <div className="shotDescription">
          <Typography>{shot?.shotId}</Typography>
          <Typography>{shot?.title}</Typography>
          <CardMedia
            component="img"
            alt={shot?.title}
            image={shot?.images.hidpi}
            title={shot?.title}
          />
          <p>{shot?.description}</p>
        </div>
      </Paper>
    </Dialog>
  );
};

export default ShotModal;
