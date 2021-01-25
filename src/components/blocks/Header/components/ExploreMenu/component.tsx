import React, { ReactElement } from 'react';
import { Grid, Link, List, ListItem } from '@material-ui/core';
import MenuCard from '../MenuCard';
import ItemImg1 from 'assets/header/shots-art.webp';
import ItemImg2 from 'assets/header/top-designers.png';
import ItemImg3 from 'assets/header/blog-art.webp';
import ItemImg4 from 'assets/header/design-workshops.png';
import { useClasses } from '../Menu/styles';

const MenuCardContent = [
  {
    path: '/',
    img: ItemImg1,
    title: 'Shots',
    description: 'Get inspired with designs shared by our talented community',
  },
  {
    path: '/',
    img: ItemImg2,
    title: 'Top Designers',
    description: 'Check out the rankings and see which designers are trending',
  },
  {
    path: '/',
    img: ItemImg3,
    title: 'Blog',
    description: 'Amazing interviews with design industry leaders, tutorials, and more',
  },
  {
    path: '/',
    img: ItemImg4,
    title: 'Design Workshops',
    description: 'Interactive design workshops with Dan Cederholm and Aaron Draplin on December 9',
  },
];

const MenuItems = [
  { label: 'Teams', path: '/' },
  { label: 'Goods for Sale', path: '/' },
  { label: 'Playoffs', path: '/' },
  { label: 'Dribbble Shop', path: '/' },
  { label: 'About Dribbble', path: '/' },
  { label: 'Advertise', path: '/' },
];

const ExploreMenu = (): ReactElement => {
  const classes = useClasses();

  return (
    <Grid container className={classes.navDropdown}>
      {MenuCardContent.map(({ path, img, title, description }) => {
        return (
          <MenuCard key={title} link={path} img={img} title={title} description={description} />
        );
      })}

      <List className={classes.menuList}>
        {MenuItems.map(({ label, path }) => {
          return (
            <ListItem key={label} className={classes.menuItemList}>
              <Link href={path} color="secondary">
                {label}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default ExploreMenu;
