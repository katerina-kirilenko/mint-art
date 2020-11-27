import React, { ReactElement } from 'react';
import { AccordionDetails, Typography } from '@material-ui/core';
import { useClasses } from './styles';

const WorkHistory = (): ReactElement => {
  const classes = useClasses();

  return (
    <AccordionDetails>
      <Typography>Lorem ipsum dolor sit.</Typography>
    </AccordionDetails>
  );
};

export default WorkHistory;
