import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, Link } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { setIsAutorizedUser } from 'store/actions';
import { useClasses } from './styles';

const UnAutorizedPanel = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const logIn = useCallback(() => {
    dispatch(setIsAutorizedUser());
  }, []);

  return (
    <Grid container classes={{ root: classes.gridContainerUnAutorized }}>
      <Link href="/" className={classes.linkSearch}>
        <Search className={classes.iconSearch} />
      </Link>
      <Button color="secondary" disableElevation onClick={logIn}>
        Sign in
      </Button>
      <Button color="primary" variant="contained" disableElevation>
        Sign up
      </Button>
    </Grid>
  );
};

export default UnAutorizedPanel;
