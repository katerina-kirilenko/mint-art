import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Brightness3, Brightness5 } from '@material-ui/icons';
import { DARK, LIGHT } from 'constants/themes';
import { getSettings } from 'store/settings';
import { getAuth } from 'store/auth';
import { setCurrentTheme } from 'store/settings';
import Menu from './components/Menu';
import AutorizedPanel from './components/AutorizedPanel';
import UnAutorizedPanel from './components/UnAutorizedPanel';
import { useClasses } from './styles';

const Header = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { isAutorizedUser } = useSelector(getAuth);
  const { currentTheme } = useSelector(getSettings);

  const setTheme = useCallback((theme: string) => () => dispatch(setCurrentTheme(theme)), []);

  return (
    <Grid className={classes.header}>
      <AppBar position="static" className={classes.topBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container classes={{ root: classes.gridContainer }}>
            <Typography variant="h6" color="primary">
              Mint art
            </Typography>
            <Menu />
          </Grid>
          <Grid container classes={{ root: classes.gridContainer }}>
            {isAutorizedUser ? <AutorizedPanel /> : <UnAutorizedPanel />}
            {currentTheme === LIGHT ? (
              <IconButton className={classes.iconBrightness} onClick={setTheme(DARK)}>
                <Brightness3 />
              </IconButton>
            ) : (
              <IconButton className={classes.iconBrightness} onClick={setTheme(LIGHT)}>
                <Brightness5 />
              </IconButton>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
