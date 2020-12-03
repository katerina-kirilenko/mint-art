import React, { ReactElement } from 'react';
import { MenuItem, Select as SelectMaterial } from '@material-ui/core';
import { ExpandMoreRounded } from '@material-ui/icons';
import { SelectProps } from './types';
import { StyledInput } from './styles';

const Select = ({ value, onChange, options, className }: SelectProps): ReactElement => {
  return (
    <SelectMaterial
      variant="outlined"
      value={value}
      onChange={onChange}
      displayEmpty
      IconComponent={ExpandMoreRounded}
      input={<StyledInput />}
      className={className}
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
