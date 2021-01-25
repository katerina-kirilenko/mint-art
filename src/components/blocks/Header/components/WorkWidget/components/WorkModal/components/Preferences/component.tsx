import React, { ReactElement, useState, useCallback, ChangeEvent } from 'react';
import clsx from 'clsx';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import Checkbox from 'components/controls/Checkbox';
import InputText from 'components/controls/InputText';
import RadioButton from 'components/controls/RadioButton';
import Select from 'components/controls/Select';
import { useClasses } from './styles';

const selectOptions = [
  { value: 'select', label: 'Select...' },
  { value: '<50k', label: '<50k' },
  { value: '50k-60k', label: '50k-60k' },
  { value: '60k-70k', label: '60k-70k' },
  { value: '70k-80k', label: '70k-80k' },
  { value: '80k-90k', label: '80k-90k' },
  { value: '90k-100k', label: '90k-100k' },
  { value: '>100k', label: '>100k' },
];

const Preferences = (): ReactElement => {
  const classes = useClasses();

  const [checkedFullTime, setCheckedFullTime] = useState(false);
  const [checkedFreelance, setCheckedFreelance] = useState(false);
  const [salary, setSalary] = useState('');

  const handleChangeFullTime = useCallback(() => {
    setCheckedFullTime(!checkedFullTime);
  }, [checkedFullTime]);

  const handleChangeFreelance = useCallback(() => {
    setCheckedFreelance(!checkedFreelance);
  }, [checkedFreelance]);

  const handleChangeSalary = useCallback((event: ChangeEvent<{ value: unknown }>) => {
    setSalary((event.target.value as string) || '');
  }, []);

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
            <FormControl
              component="fieldset"
              classes={{
                root: classes.formControl,
              }}
            >
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
            </FormControl>

            <FormControl
              component="fieldset"
              classes={{
                root: classes.formControl,
              }}
            >
              <Typography component="span" className={classes.title}>
                Are you willing to work remotely?
              </Typography>
              <Typography component="span" className={classes.requiredIndicator}>
                *
              </Typography>
              <RadioGroup
                defaultValue="yes"
                aria-label="remotely"
                classes={{ root: classes.radioGroup }}
              >
                <FormControlLabel value="yes" control={<RadioButton />} label="Yes" />
                <FormControlLabel value="remote" control={<RadioButton />} label="Remote only" />
                <FormControlLabel value="no" control={<RadioButton />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
              <Typography component="span" className={clsx(classes.title, classes.salaryTitle)}>
                Salary range (in USD)
              </Typography>
              <Select
                options={selectOptions}
                value={salary}
                onChange={handleChangeSalary}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                  PopoverClasses: {
                    root: classes.popover,
                  },
                }}
              />
            </FormControl>
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
            <FormControl
              component="fieldset"
              classes={{
                root: classes.formControl,
              }}
            >
              <Typography className={classes.title}>
                Minimum fixed price budget? (in USD)
              </Typography>
              <InputText placeholder="$" defaultValue="0" className={classes.input} />
            </FormControl>

            <FormControl component="fieldset" classes={{ root: classes.formControl }}>
              <Typography className={classes.title}>Minimum hourly rate? (in USD)</Typography>
              <InputText placeholder="$" defaultValue="0" className={classes.input} />
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </FormGroup>
    </AccordionDetails>
  );
};

export default Preferences;
