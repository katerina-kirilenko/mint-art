import React, { ReactElement } from 'react';
import { MenuList } from '@material-ui/core';
import { accountMenuLinks } from 'routes/accountMenuLinks';
import MenuItemList from './components/MenuItemList';
import { useClasses } from './styles';

const AccountMenu = (): ReactElement => {
  const classes = useClasses();

  return (
    <MenuList classes={{ root: classes.root }}>
      {accountMenuLinks.map((item) => {
        return <MenuItemList key={item.label} {...item} />;
      })}
    </MenuList>
  );
};

export default AccountMenu;
