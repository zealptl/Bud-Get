import React from 'react';
import { makeStyles, Grid, CssBaseline, useTheme } from '@material-ui/core';
import Navbar from '../../layout/Navbar';
import PageDrawer from '../../layout/PageDrawer';

const Trends = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar heading='Trends' />
      <PageDrawer />
    </div>
  );
};

export default Trends;
