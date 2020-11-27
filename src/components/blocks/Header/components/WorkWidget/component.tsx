import React, { ReactElement, useCallback, useState } from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';
import WorkSwitcher from './components/WorkSwitcher';
import WorkModal from './components/WorkModal';
import { useClasses } from './styles';

const WorkWidget = (): ReactElement => {
  const classes = useClasses();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, [isOpenModal]);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, [isOpenModal]);

  return (
    <Paper elevation={0}>
      <WorkSwitcher />
      <Divider className={classes.divider} />
      <Typography variant="subtitle2" className={classes.link} onClick={handleClickOpenModal}>
        Edit work availability
      </Typography>

      <WorkModal isOpen={isOpenModal} close={handleCloseModal} />
    </Paper>
  );
};

export default WorkWidget;
