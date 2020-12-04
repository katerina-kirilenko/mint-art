import { ChangeEvent } from 'react';
import { MenuProps } from '@material-ui/core';

export interface SelectCustomProps {
  value: string;
  onChange: (event: ChangeEvent<{ value: unknown }>) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
  MenuProps?: Partial<MenuProps>;
}
