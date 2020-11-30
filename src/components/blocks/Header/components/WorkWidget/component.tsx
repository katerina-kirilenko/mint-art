import React, { ReactElement } from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';
import WorkSwitcher from './components/WorkSwitcher';
import { WorkWidgetProps } from './types';
import { useClasses } from './styles';

const WorkWidget = ({ openModal }: WorkWidgetProps): ReactElement => {
  const classes = useClasses();

  return (
    <Paper elevation={0}>
      <WorkSwitcher />
      <Divider className={classes.divider} />
      <Typography variant="subtitle2" className={classes.link} onClick={openModal}>
        Edit work availability
      </Typography>
    </Paper>
  );
};

export default WorkWidget;
