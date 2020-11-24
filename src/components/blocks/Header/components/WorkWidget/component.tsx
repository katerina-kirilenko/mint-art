import React, { ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import { Divider, Grid, Link, Paper, Typography } from '@material-ui/core';
import { useClasses, WorkSwitch } from './styles';

const WorkWidget = (): ReactElement => {
  const classes = useClasses();

  const [isWorkWidgetActive, setIsWorkWidgetActive] = useState(false);

  const handleChange = useCallback(() => {
    setIsWorkWidgetActive(!isWorkWidgetActive);
  }, [isWorkWidgetActive]);

  return (
    <Paper elevation={0}>
      <Grid container>
        <Grid item>
          <Typography
            component="span"
            className={clsx(classes.label, { [classes.labelActive]: !isWorkWidgetActive })}
          >
            Not available
          </Typography>
        </Grid>
        <Grid item>
          <WorkSwitch
            checked={isWorkWidgetActive}
            onChange={handleChange}
            name="workWidget"
            color="primary"
          />
        </Grid>
        <Grid item>
          <Typography
            component="span"
            className={clsx(classes.label, { [classes.labelActive]: isWorkWidgetActive })}
          >
            Available for work
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Link href="/" className={classes.link}>
        Edit work availability
      </Link>
    </Paper>
  );
};

export default WorkWidget;
