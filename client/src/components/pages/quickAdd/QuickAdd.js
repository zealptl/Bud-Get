import React from 'react';
import { makeStyles, Grid, CssBaseline, useTheme } from '@material-ui/core';
import { DRAWER_WIDTH } from '../../../utils/constants';
import PageDrawer from '../../layout/PageDrawer';
import Chart from '../dashboard/Chart';
import TransactionSummary from '../dashboard/TransactionSummary';
import PreviewTable from '../dashboard/PreviewTable';
import Navbar from '../../layout/Navbar';
import QuickAddForm from './QuickAddForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    float: 'right',
    flexGrow: 1,
  },
  componentContainer: {
    ...theme.component.outer,
    margin: theme.spacing(2, 0, 0, 2),
    padding: theme.spacing(1),
  },
}));

const QuickAdd = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <CssBaseline />
      <Navbar heading='Quick Add' />
      <PageDrawer />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12}>
            <div
              className={classes.componentContainer}
              style={{ marginRight: theme.spacing(2) }}
            >
              <QuickAddForm />
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className={classes.componentContainer}>
              <Chart />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div
              className={classes.componentContainer}
              style={{ marginRight: theme.spacing(2) }}
            >
              <TransactionSummary />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              className={classes.componentContainer}
              style={{ marginBottom: theme.spacing(2) }}
            >
              <PreviewTable type='income' />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              className={classes.componentContainer}
              style={{
                marginRight: theme.spacing(2),
                marginBottom: theme.spacing(2),
              }}
            >
              <PreviewTable type='expense' />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default QuickAdd;
