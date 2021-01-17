import { ChangeEvent, ReactElement } from 'react';

export interface InputTextProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  icon?: ReactElement;
  className?: string;
  onChangeHandler?: (event: ChangeEvent<{ value: unknown }>) => void;
}
