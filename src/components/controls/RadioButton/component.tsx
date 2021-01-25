import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Radio, RadioProps } from '@material-ui/core';
import { useClasses } from './styles';

const RadioButton = (props: RadioProps): ReactElement => {
  const classes = useClasses();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

export default RadioButton;
