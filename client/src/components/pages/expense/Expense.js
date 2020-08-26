import React from 'react';
import { makeStyles, Grid, CssBaseline, useTheme } from '@material-ui/core';
import Navbar from '../../layout/Navbar';
import PageDrawer from '../../layout/PageDrawer';

const Expense = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar heading='Expense' />
      <PageDrawer />
    </div>
  );
};

export default Expense;
