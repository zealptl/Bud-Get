import React, { Fragment } from 'react';
import { Typography, useTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  component: theme.component.inner,
  incomeSummary: { color: theme.palette.income.main },
  expenseSummary: { color: theme.palette.expense.main },
  savingsSummary: { color: theme.palette.savings.main },
}));

const TransactionSummary = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.component}>
        <Typography color='default' gutterBottom>
          This Month Income
        </Typography>
        <Typography
          className={classes.incomeSummary}
          component='h2'
          variant='h4'
          gutterBottom
        >
          $ 100,000
        </Typography>
      </div>
      <div className={classes.component}>
        <Typography color='default' gutterBottom>
          This Month Expense
        </Typography>
        <Typography
          className={classes.expenseSummary}
          component='h2'
          variant='h4'
          gutterBottom
        >
          $ 60,000
        </Typography>
      </div>
      <div className={classes.component}>
        <Typography color='default' gutterBottom>
          This Month Savings
        </Typography>
        <Typography
          className={classes.savingsSummary}
          component='h2'
          variant='h4'
          gutterBottom
        >
          $ 40,000
        </Typography>
      </div>
    </Fragment>
  );
};

export default TransactionSummary;
