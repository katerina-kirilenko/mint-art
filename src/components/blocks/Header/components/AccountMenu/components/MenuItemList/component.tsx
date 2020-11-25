import React, { ReactElement } from 'react';
import { Box, Tooltip } from '@material-ui/core';
import MenuItemView from '../MenuItemView';
import { ItemListProps } from '../types';
import { useClasses } from './styles';

const MenuItemList = (item: ItemListProps): ReactElement => {
  const classes = useClasses();

  return item.subMenu ? (
    <Tooltip
      key={item.label}
      title={item.subMenu.map((child) => (
        <MenuItemList key={child.label} {...child} />
      ))}
      interactive
      placement="left"
      classes={{
        tooltip: classes.widget,
        arrow: classes.widgetArrow,
        tooltipPlacementLeft: classes.placementLeft,
      }}
    >
      <Box>
        <MenuItemView {...item} />
      </Box>
    </Tooltip>
  ) : (
    <MenuItemView {...item} />
  );
};

export default MenuItemList;
