import { ReactElement } from 'react';

export interface ItemListProps {
  path: string;
  label: string;
  icon?: ReactElement;
  arrowForward?: ReactElement;
  divider?: ReactElement;
  subMenu?: ItemListProps[];
}
