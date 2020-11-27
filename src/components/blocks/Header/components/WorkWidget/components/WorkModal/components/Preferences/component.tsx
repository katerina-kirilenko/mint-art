import React, { ReactElement, useState, useCallback } from 'react';
import clsx from 'clsx';
import { AccordionDetails, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { useClasses } from './styles';

const Preferences = (): ReactElement => {
  const classes = useClasses();

  const [checkedFullTime, setCheckedFullTime] = useState(false);
  const [checkedFreelance, setCheckedFreelance] = useState(false);

  const handleChangeFullTime = useCallback(() => {
    setCheckedFullTime(!checkedFullTime);
  }, [checkedFullTime]);

  const handleChangeFreelance = useCallback(() => {
    setCheckedFreelance(!checkedFreelance);
  }, [checkedFreelance]);

  return (
    <AccordionDetails>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedFullTime}
              onChange={handleChangeFullTime}
              icon={<span className={classes.icon} />}
              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
              name="fullTime"
              classes={{
                root: classes.check,
              }}
            />
          }
          label="Full-Time"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedFreelance}
              onChange={handleChangeFreelance}
              icon={<span className={classes.icon} />}
              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
              name="freelance"
              classes={{
                root: classes.check,
              }}
            />
          }
          label="Freelance/Contract"
        />
      </FormGroup>
    </AccordionDetails>
  );
};

export default Preferences;
