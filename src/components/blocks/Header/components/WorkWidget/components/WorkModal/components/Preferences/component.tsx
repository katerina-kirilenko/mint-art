import React, { ReactElement, useState, useCallback } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Select,
  Typography,
} from '@material-ui/core';
import { RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons';
import Checkbox from 'components/controls/Checkbox';
import InputText from 'components/controls/InputText';
import { useClasses } from './styles';

const Preferences = (): ReactElement => {
  const classes = useClasses();

  const [checkedFullTime, setCheckedFullTime] = useState(true);
  const [checkedFreelance, setCheckedFreelance] = useState(false);

  const handleChangeFullTime = useCallback(() => {
    setCheckedFullTime(!checkedFullTime);
  }, [checkedFullTime]);

  const handleChangeFreelance = useCallback(() => {
    setCheckedFreelance(!checkedFreelance);
  }, [checkedFreelance]);

  return (
    <AccordionDetails className={classes.accordionDetails}>
      <FormGroup className={classes.formGroup}>
        <Accordion
          expanded={checkedFullTime}
          onChange={handleChangeFullTime}
          classes={{
            root: classes.accordion,
          }}
        >
          <AccordionSummary className={classes.accordionSummary}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedFullTime}
                  onChange={handleChangeFullTime}
                  name="fullTime"
                />
              }
              label=""
              className={classes.controlLabel}
            />
            <Typography className={classes.controlLabel}>Full-Time</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetailsInner}>
            <div>
              <Typography component="span" className={classes.title}>
                Where are you located?
              </Typography>
              <Typography component="span" className={classes.requiredIndicator}>
                *
              </Typography>
              <InputText
                placeholder="Enter Location..."
                defaultValue="Location"
                className={classes.input}
              />
            </div>
            <div>
              <Typography component="span" className={classes.title}>
                Are you willing to work remotely?
              </Typography>
              <Typography component="span" className={classes.requiredIndicator}>
                *
              </Typography>
              <RadioGroup>
                <RadioButtonChecked />
                <RadioButtonUnchecked />
              </RadioGroup>
            </div>
            <div>
              <Typography className={classes.title}>Salary range (in USD)</Typography>
              <Select value="Select" variant="outlined">
                <option value="value">label</option>
              </Select>
            </div>
          </AccordionDetails>
        </Accordion>
      </FormGroup>

      <FormGroup className={classes.formGroup}>
        <Accordion
          expanded={checkedFreelance}
          onChange={handleChangeFreelance}
          classes={{
            root: classes.accordion,
          }}
        >
          <AccordionSummary className={classes.accordionSummary}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedFreelance}
                  onChange={handleChangeFreelance}
                  name="freelance"
                />
              }
              label=""
              className={classes.controlLabel}
            />
            <Typography className={classes.controlLabel}>Freelance/Contract</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.title}>Minimum fixed price budget? (in USD)</Typography>
          </AccordionDetails>
        </Accordion>
      </FormGroup>
    </AccordionDetails>
  );
};

export default Preferences;
