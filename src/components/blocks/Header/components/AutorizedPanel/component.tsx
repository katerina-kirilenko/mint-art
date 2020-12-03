import React, { ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import { Badge, Button, Grid, IconButton, InputAdornment, Tooltip } from '@material-ui/core';
import { AccountCircle, Search, Work } from '@material-ui/icons';
import WorkWidget from '../WorkWidget';
import AccountMenu from '../AccountMenu';
import InputText from 'components/controls/InputText';
import WorkModal from '../WorkWidget/components/WorkModal';
import { useClasses } from './styles';

const AutorizedPanel = (): ReactElement => {
  const classes = useClasses();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, [isOpenModal]);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, [isOpenModal]);

  return (
    <>
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
          title={<WorkWidget openModal={handleClickOpenModal} />}
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
      {isOpenModal && <WorkModal isOpen={isOpenModal} close={handleCloseModal} />}
    </>
  );
};

export default AutorizedPanel;
