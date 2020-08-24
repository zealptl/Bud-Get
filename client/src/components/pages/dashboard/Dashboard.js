import React from 'react';
import { makeStyles, Grid, CssBaseline, useTheme } from '@material-ui/core';
import { DRAWER_WIDTH } from '../../../utils/constants';
import PageDrawer from '../../layout/PageDrawer';
import Navbar from '../../layout/Navbar';
import Chart from './Chart';
import TransactionSummary from './TransactionSummary';
import PreviewTable from './PreviewTable';

const useStyles = makeStyles((theme) => ({
  root: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    float: 'right',
    flexGrow: 1,
  },
  componentContainer: {
    ...theme.component.outer,
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  component: {
    ...theme.component.inner,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <CssBaseline />
      <Navbar name='Dashboard' />
      <PageDrawer />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <div className={classes.componentContainer}>
              <div className={classes.component}>
                <Chart />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.componentContainer}>
              <TransactionSummary />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.componentContainer}>
              <div className={classes.component}>
                <PreviewTable type='income' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.componentContainer}>
              <div className={classes.component}>
                <PreviewTable type='expense' />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
