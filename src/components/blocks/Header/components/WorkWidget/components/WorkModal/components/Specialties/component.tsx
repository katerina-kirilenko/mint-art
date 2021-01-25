import React, { ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import { AccordionDetails, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import Checkbox from 'components/controls/Checkbox';
import { ExpandMore } from '@material-ui/icons';
import { useClasses } from './styles';

const Specialties = (): ReactElement => {
  const classes = useClasses();

  const [checkedAnimation, setCheckedAnimation] = useState(false);
  const [checkedBrand, setCheckedBrand] = useState(false);
  const [checkedIllustration, setCheckedIllustration] = useState(false);

  const handleChangeAnimation = useCallback(() => {
    setCheckedAnimation(!checkedAnimation);
  }, [checkedAnimation]);

  const handleChangeBrand = useCallback(() => {
    setCheckedBrand(!checkedBrand);
  }, [checkedBrand]);

  const handleChangeIllustration = useCallback(() => {
    setCheckedIllustration(!checkedIllustration);
  }, [checkedIllustration]);

  const options = [
    {
      name: 'animation',
      label: 'Animation',
      checked: checkedAnimation,
      onChange: handleChangeAnimation,
    },
    {
      name: 'brand',
      label: 'Brand / Graphic Design',
      checked: checkedBrand,
      onChange: handleChangeBrand,
    },
    {
      name: 'illustration',
      label: 'Illustration',
      checked: checkedIllustration,
      onChange: handleChangeIllustration,
    },
  ];

  return (
    <AccordionDetails className={classes.accordionDetails}>
      {options.map(({ name, label, checked, onChange }) => {
        return (
          <FormGroup key={name} className={classes.formGroup}>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={onChange} name={name} />}
              label={label}
              className={clsx(classes.controlLabel, { [classes.check]: checked })}
            />
            {checked && (
              <div className={classes.wrapSelect}>
                <Typography component="span" className={classes.select}>
                  Select years
                </Typography>
                <ExpandMore className={classes.expand} />
              </div>
            )}
          </FormGroup>
        );
      })}
    </AccordionDetails>
  );
};

export default Specialties;
