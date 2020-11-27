import React, { ReactElement } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AccountCircle, Search, Work } from '@material-ui/icons';
import Menu from './components/Menu';
import WorkWidget from './components/WorkWidget';
import AccountMenu from './components/AccountMenu';
import InputText from 'components/controls/InputText';
import { useClasses } from './styles';

const Header = (): ReactElement => {
  const classes = useClasses();

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
            <div className={classes.search}>
              <InputText
                placeholder="Search…"
                icon={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
                className={classes.input}
              />
            </div>
            <Tooltip
              title={<WorkWidget />}
              interactive
              arrow
              classes={{
                tooltip: clsx(classes.widget, classes.workWidget),
                arrow: classes.widgetArrow,
                tooltipPlacementBottom: classes.widgetMargin,
              }}
            >
              <IconButton className={classes.icon}>
                <Badge
                  className={classes.badge}
                  badgeContent="×"
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <Work />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip
              title={<AccountMenu />}
              interactive
              arrow
              classes={{
                tooltip: clsx(classes.widget, classes.accountWidget),
                arrow: classes.widgetArrow,
                tooltipPlacementBottom: classes.widgetMargin,
              }}
            >
              <IconButton className={clsx(classes.icon, classes.account)}>
                <AccountCircle />
              </IconButton>
            </Tooltip>

            <Button color="primary" variant="contained" disableElevation>
              Upload
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
