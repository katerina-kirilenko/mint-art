import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MenuList } from '@material-ui/core';
import { setIsAutorizedUser } from 'store/auth';
import { accountMenuLinks } from 'routes/accountMenuLinks';
import MenuItemList from './components/MenuItemList';
import MenuItemView from './components/MenuItemView';
import { useClasses } from './styles';

const AccountMenu = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(setIsAutorizedUser());
  }, []);

  return (
    <MenuList classes={{ root: classes.root }}>
      {accountMenuLinks.map((item) => {
        return <MenuItemList key={item.label} {...item} />;
      })}
      <MenuItemView label="Sign Out" handleClick={logOut} />
    </MenuList>
  );
};

export default AccountMenu;
