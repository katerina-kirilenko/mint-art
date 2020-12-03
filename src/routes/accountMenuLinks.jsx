import React from 'react';
import { Divider } from '@material-ui/core';
import {
  Favorite,
  TrendingUp,
  CreateNewFolder,
  Star,
  ArrowForwardIosRounded,
} from '@material-ui/icons/';

export const accountMenuLinks = [
  {
    path: '/',
    label: 'Profile',
    divider: <Divider />,
  },
  {
    path: '/',
    label: 'Edit Profile',
  },
  {
    path: '/',
    label: 'Edit Work Availability',
    divider: <Divider />,
  },
  {
    path: '/',
    label: 'My Boosted Shots',
    icon: <TrendingUp />,
  },
  {
    path: '/',
    label: 'My Likes',
    icon: <Favorite />,
  },
  {
    path: '/',
    label: 'My Collections',
    icon: <CreateNewFolder />,
  },
  {
    path: '/',
    label: 'Go Pro',
    icon: <Star />,
    arrowForward: <ArrowForwardIosRounded />,
    divider: <Divider />,
    subMenu: [
      {
        path: '/',
        label: 'My Playbook',
      },
      {
        path: '/',
        label: 'My Stats',
      },
      {
        path: '/',
        label: 'My Goods for Sale',
      },
      {
        path: '/',
        label: 'My Projects',
      },
      {
        path: '/',
        label: 'My Deals',
      },
      {
        path: '/',
        label: 'See All Pro Benefits',
      },
    ],
  },
  {
    path: '/',
    label: 'Account Settings',
  },
];
