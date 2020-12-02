import React, { ReactElement } from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import AutorizedPanel from './components/AutorizedPanel';
import UnAutorizedPanel from './components/UnAutorizedPanel';
import { isAutorizedUser } from 'store/selectors';
import { useClasses } from './styles';

const Header = (): ReactElement => {
  const classes = useClasses();

  const isAutorized = useSelector(isAutorizedUser);

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
          {isAutorized ? <AutorizedPanel /> : <UnAutorizedPanel />}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
