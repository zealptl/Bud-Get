import React from 'react';
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  CssBaseline,
} from '@material-ui/core';
import PageDrawer from '../../layout/PageDrawer';
import Navbar from '../../layout/Navbar';
import Chart from './Chart';
import { DRAWER_WIDTH } from '../../../utils/constants';
import theme from '../../../theme';
import TransactionSummary from './TransactionSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: DRAWER_WIDTH + 20,
  },
  componentContainer: {
    ...theme.component.outer,
  },
  component: {
    ...theme.component.inner,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Navbar name='Dashboard' />
      <PageDrawer />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={8}
            className={classes.componentContainer}
            style={{ marginTop: theme.spacing(3) }}
          >
            <div className={classes.component}>
              <Chart />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            className={classes.componentContainer}
            style={{ marginTop: theme.spacing(3) }}
          >
            <TransactionSummary />
          </Grid>
          <Grid item xs={12} md={5} className={classes.componentContainer}>
            <div className={classes.component}></div>
            <div className={classes.component}></div>
            <div className={classes.component}></div>
          </Grid>
          <Grid item xs={12} md={5} className={classes.componentContainer}>
            <div className={classes.component}></div>
            <div className={classes.component}></div>
            <div className={classes.component}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
