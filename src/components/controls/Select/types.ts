import { ChangeEvent } from 'react';

export interface SelectProps {
  value?: string;
  onChange?: (event: ChangeEvent<{ value: unknown }>) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
}
