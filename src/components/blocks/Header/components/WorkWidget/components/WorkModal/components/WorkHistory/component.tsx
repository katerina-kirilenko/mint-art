import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import { AccordionDetails, Container, Divider, Grid, Typography } from '@material-ui/core';
import InputText from 'components/controls/InputText';
import Select from 'components/controls/Select';
import { useClasses } from './styles';

const selectOptions = [
  { value: '', label: 'Year' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
  { value: '2015', label: '2015' },
];

const WorkHistory = (): ReactElement => {
  const classes = useClasses();

  const [year, setYear] = useState('');

  const handleChangeYear = useCallback((event: ChangeEvent<{ value: unknown }>) => {
    setYear((event.target.value as string) || '');
  }, []);

  return (
    <AccordionDetails className={classes.accordionDetails}>
      <Container className={classes.container}>
        <Typography component="p" className={classes.title}>
          Work History
        </Typography>
        <Grid container className={classes.container} justify="space-between">
          <Grid item>
            <InputText placeholder="Position" className={clsx(classes.input, classes.maxWidth)} />
          </Grid>
          <Grid item className={classes.at}>
            <Typography component="span" className={classes.subtitle}>
              at
            </Typography>
          </Grid>
          <Grid item className={classes.flex}>
            <InputText placeholder="Company" className={classes.input} />
          </Grid>
        </Grid>
        <Select
          value={year}
          onChange={handleChangeYear}
          options={selectOptions}
          className={clsx(classes.select, classes.maxWidth)}
        />
      </Container>

      <Divider className={classes.divider} />

      <Container className={classes.container}>
        <Typography component="p" className={classes.title}>
          Skills
        </Typography>
        <InputText className={classes.input} />
        <Typography component="span" className={classes.subtitle}>
          Add up to 16 skills. Use a comma to separate skills, or choose from the list.
        </Typography>
      </Container>
    </AccordionDetails>
  );
};

export default WorkHistory;
