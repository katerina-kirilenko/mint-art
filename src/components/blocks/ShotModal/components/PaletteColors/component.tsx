import React, { ReactElement } from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { getRandomColors } from 'helpers/modal';
import { useClasses } from './styles';

const PaletteColors = (): ReactElement => {
  const classes = useClasses();
  const randomColors = getRandomColors({});

  return (
    <MenuList className={classes.list}>
      {randomColors.map((color, idx) => (
        <MenuItem key={idx} style={{ backgroundColor: color }} className={classes.listItem} />
      ))}
    </MenuList>
  );
};

export default PaletteColors;
