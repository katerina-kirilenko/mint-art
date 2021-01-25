import React, { ReactElement } from 'react';
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core';
import { InputTextProps } from './types';
import { useClasses } from './styles';

const InputText = ({
  placeholder,
  value,
  defaultValue,
  icon,
  className,
  ...props
}: InputTextProps & OutlinedInputProps): ReactElement => {
  const classes = useClasses();

  return (
    <OutlinedInput
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      startAdornment={icon}
      fullWidth
      classes={{
        root: classes.textField,
        input: classes.input,
        notchedOutline: classes.notchedOutline,
      }}
      className={className}
      {...props}
    />
  );
};

export default InputText;
