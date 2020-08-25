import React from 'react';
import { makeStyles, Grid, CssBaseline, useTheme } from '@material-ui/core';
import { DRAWER_WIDTH } from '../../../utils/constants';
import Navbar from '../../layout/Navbar';
import PageDrawer from '../../layout/PageDrawer';
import Chart from './Chart';

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
  component: {
    ...theme.component.inner,
  },
}));

const Income = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Navbar heading='Income' />
      <PageDrawer />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid container xs={12} md={6} className={classes.componentContainer}>
            <Grid item xs={12} md={12}>
              <div className={classes.component}>
                <Chart isAnimationActive={true} title='This Month' />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className={classes.component}>
                <Chart isAnimationActive={true} title='This Year' />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Income;
