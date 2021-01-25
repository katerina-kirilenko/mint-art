import React, { ReactElement } from 'react';
import { MenuItem, Select as SelectMaterial, SelectProps } from '@material-ui/core';
import { ExpandMoreRounded } from '@material-ui/icons';
import { SelectCustomProps } from './types';
import { StyledInput } from './styles';

const Select = ({
  value,
  onChange,
  options,
  className,
  MenuProps,
  ...props
}: SelectCustomProps & SelectProps): ReactElement => {
  return (
    <SelectMaterial
      variant="outlined"
      value={value}
      onChange={onChange}
      displayEmpty
      IconComponent={ExpandMoreRounded}
      input={<StyledInput />}
      className={className}
      MenuProps={MenuProps}
      {...props}
    >
      {options.map(({ value, label }) => {
        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        );
      })}
    </SelectMaterial>
  );
};

export default Select;
