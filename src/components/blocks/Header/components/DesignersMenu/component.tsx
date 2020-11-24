import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import MenuCard from '../MenuCard';
import ItemImg1 from 'assets/header/job-board.png';
import ItemImg2 from 'assets/header/dribbble-projects.png';
import ItemImg3 from 'assets/header/dribbble-pro.png';
import { useClasses } from '../Menu/styles';

const MenuCardContent = [
  {
    path: '/',
    img: ItemImg1,
    title: 'Job Board',
    description: 'Find your dream design job on Dribbble',
  },
  {
    path: '/',
    img: ItemImg2,
    title: 'Freelance Projects',
    description: 'Exclusive project board perfect for Freelancers and Agencies.',
  },
  {
    path: '/',
    img: ItemImg3,
    title: 'Go Pro',
    description: 'For Designers & Design Teams, join the worlds best designers on Dribbble.',
  },
];

const DesignersMenu = (): ReactElement => {
  const classes = useClasses();

  return (
    <Grid container className={classes.navDropdown}>
      {MenuCardContent.map(({ path, img, title, description }) => {
        return (
          <MenuCard key={title} link={path} img={img} title={title} description={description} />
        );
      })}
    </Grid>
  );
};

export default DesignersMenu;
