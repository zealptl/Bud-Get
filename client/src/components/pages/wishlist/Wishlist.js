import React from 'react';
import { makeStyles, Grid, CssBaseline, useTheme } from '@material-ui/core';
import Navbar from '../../layout/Navbar';
import PageDrawer from '../../layout/PageDrawer';

const Wishlist = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar heading='Wishlist' />
      <PageDrawer />
    </div>
  );
};

export default Wishlist;
