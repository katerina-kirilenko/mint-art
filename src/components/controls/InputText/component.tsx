import React, { ReactElement } from 'react';
import { OutlinedInput } from '@material-ui/core';
import { InputTextProps } from './types';
import { useClasses } from './styles';

const InputText = ({
  placeholder,
  defaultValue,
  icon,
  className,
}: InputTextProps): ReactElement => {
  const classes = useClasses();

  return (
    <OutlinedInput
      placeholder={placeholder}
      defaultValue={defaultValue}
      startAdornment={icon}
      fullWidth
      classes={{
        root: classes.textField,
        input: classes.input,
        notchedOutline: classes.notchedOutline,
      }}
      className={className}
    />
  );
};

export default InputText;
