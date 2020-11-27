import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Checkbox as CheckboxMaterial } from '@material-ui/core';
import { CheckboxProps } from './types';
import { useClasses } from './styles';

const Checkbox = ({ name, checked, onChange }: CheckboxProps): ReactElement => {
  const classes = useClasses();

  return (
    <CheckboxMaterial
      checked={checked}
      onChange={onChange}
      icon={<span className={classes.icon} />}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      name={name}
      classes={{
        root: classes.check,
      }}
    />
  );
};

export default Checkbox;
