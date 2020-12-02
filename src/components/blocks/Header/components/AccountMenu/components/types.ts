import { ReactElement } from 'react';

export interface ItemListProps {
  label: string;
  path?: string;
  icon?: ReactElement;
  arrowForward?: ReactElement;
  divider?: ReactElement;
  subMenu?: ItemListProps[];
  handleClick?: () => void;
}
