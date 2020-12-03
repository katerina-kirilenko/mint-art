import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import MenuCard from '../MenuCard';
import ItemImg1 from 'assets/header/List_my_job_opening.png';
import ItemImg2 from 'assets/header/Designer_Search.png';
import ItemImg3 from 'assets/header/Job_post_search.png';
import { useClasses } from '../Menu/styles';

const MenuCardContent = [
  {
    path: '/',
    img: ItemImg1,
    title: 'List my job opening',
    description: `Publish your open role on the world's #1 job board for creatives`,
  },
  {
    path: '/',
    img: ItemImg2,
    title: 'Designer Search',
    description: 'Find and contact designers who are looking for their next opportunity',
  },
  {
    path: '/',
    img: ItemImg3,
    title: 'Job post + search',
    description:
      'Search our database for top talent and post your listing on our popular job board',
  },
];

const HiringMenu = (): ReactElement => {
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

export default HiringMenu;
