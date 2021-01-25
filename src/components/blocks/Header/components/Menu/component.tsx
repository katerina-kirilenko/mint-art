import React, { ReactElement } from 'react';
import { Link, List, ListItem, Tooltip } from '@material-ui/core';
import { ExpandMoreRounded } from '@material-ui/icons';
import ExploreMenu from '../ExploreMenu';
import DesignersMenu from '../DesignersMenu';
import HiringMenu from '../HiringMenu';
import { useClasses } from './styles';

const ListItems = [
  { id: 'explore', title: 'Explore', component: <ExploreMenu /> },
  { id: 'designers', title: 'For Designers', component: <DesignersMenu /> },
  { id: 'hiring', title: 'Hiring Designers?', component: <HiringMenu /> },
];

const Menu = (): ReactElement => {
  const classes = useClasses();

  return (
    <List className={classes.menu}>
      {ListItems.map(({ id, title, component }) => {
        return (
          <ListItem key={id} className={classes.menuItem}>
            <Tooltip
              title={component}
              interactive
              classes={{
                tooltip: classes.tooltip,
                popper: classes.popper,
              }}
            >
              <Link>
                {title}
                <ExpandMoreRounded className={classes.arrowMore} />
              </Link>
            </Tooltip>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Menu;
