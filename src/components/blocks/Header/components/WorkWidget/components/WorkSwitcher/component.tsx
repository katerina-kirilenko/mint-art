import React, { ReactElement, useCallback } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { isAvailableForWork } from 'store/selectors';
import { setAvailableForWork } from 'store/actions';
import { Grid, Typography } from '@material-ui/core';
import { useClasses, WorkSwitch } from './styles';

const WorkSwitcher = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const isAvailable = useSelector(isAvailableForWork);

  const handleChange = useCallback(() => {
    dispatch(setAvailableForWork());
  }, []);

  return (
    <Grid container classes={{ container: classes.container }}>
      <Grid item>
        <Typography
          component="span"
          className={clsx(classes.label, { [classes.labelActive]: !isAvailable })}
        >
          Not available
        </Typography>
      </Grid>
      <Grid item>
        <WorkSwitch
          checked={isAvailable}
          onChange={handleChange}
          name="workWidget"
          color="primary"
        />
      </Grid>
      <Grid item>
        <Typography
          component="span"
          className={clsx(classes.label, { [classes.labelActive]: isAvailable })}
        >
          Available for work
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WorkSwitcher;
