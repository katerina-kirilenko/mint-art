import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Grid, Link, ListItem, ListItemIcon, MenuItem } from '@material-ui/core';
import { ItemListProps } from '../types';
import { useClasses } from './styles';

const MenuItemView = ({
  path,
  label,
  icon,
  divider,
  arrowForward,
  subMenu,
  handleClick,
}: ItemListProps): ReactElement => {
  const classes = useClasses();

  return (
    <>
      <MenuItem
        onClick={handleClick}
        className={clsx(classes.menuItem, { [classes.arrow]: !!subMenu })}
      >
        <Grid container>
          {icon && (
            <ListItemIcon className={clsx(classes.icon, { [classes.iconSubMenu]: !!subMenu })}>
              {icon}
            </ListItemIcon>
          )}
          <Link href={path} className={classes.link}>
            {label}
          </Link>
        </Grid>
        {arrowForward && (
          <ListItemIcon className={classes.iconArrowSubMenu}>{arrowForward}</ListItemIcon>
        )}
      </MenuItem>
      {divider && <ListItem className={classes.listItem}>{divider}</ListItem>}
    </>
  );
};

export default MenuItemView;
