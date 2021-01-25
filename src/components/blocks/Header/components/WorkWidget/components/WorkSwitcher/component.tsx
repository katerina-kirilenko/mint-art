import React, { ReactElement, useCallback } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { getSettings, setAvailableForWork } from 'store/settings';
import { useClasses, WorkSwitch } from './styles';

const WorkSwitcher = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { availableForWork } = useSelector(getSettings);

  const handleChange = useCallback(() => {
    dispatch(setAvailableForWork());
  }, []);

  return (
    <Grid container classes={{ container: classes.container }}>
      <Grid item>
        <Typography
          component="span"
          className={clsx(classes.label, { [classes.labelActive]: !availableForWork })}
        >
          Not available
        </Typography>
      </Grid>
      <Grid item>
        <WorkSwitch
          checked={availableForWork}
          onChange={handleChange}
          name="workWidget"
          color="primary"
        />
      </Grid>
      <Grid item>
        <Typography
          component="span"
          className={clsx(classes.label, { [classes.labelActive]: availableForWork })}
        >
          Available for work
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WorkSwitcher;
