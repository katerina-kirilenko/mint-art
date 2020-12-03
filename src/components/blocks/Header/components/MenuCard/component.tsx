import { Grid, Link, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { MenuCardProps } from './types';
import { useClasses } from './styles';

const MenuCard = ({ link, img, title, description }: MenuCardProps): ReactElement => {
  const classes = useClasses();

  return (
    <Grid container className={classes.card}>
      <Link href={link}>
        <div className={classes.image}>
          <img src={img} alt={title} />
        </div>
        <div className={classes.description}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </div>
      </Link>
    </Grid>
  );
};

export default MenuCard;
