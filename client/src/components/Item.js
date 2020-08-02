import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  componentOuter: { ...theme.component.outer },
  componentInner: {
    ...theme.component.inner,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btn: {
    width: '100px',
  },
  incomeBtn: {
    borderColor: theme.palette.income.main,
    '&:hover': {
      backgroundColor: theme.palette.income.main,
    },
  },
  expenseBtn: {
    borderColor: theme.palette.expense.main,
    '&:hover': {
      backgroundColor: theme.palette.expense.main,
    },
  },
  savingsBtn: {
    borderColor: theme.palette.savings.main,
    '&:hover': {
      backgroundColor: theme.palette.savings.main,
    },
  },
  textField: {
    borderColor: theme.palette.primary.main,
  },
}));

const Item = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.componentOuter}>
        <div className={classes.componentInner}>
          <Button
            fullWidth
            variant='outlined'
            className={[classes.btn, classes.incomeBtn]}
          >
            Add
          </Button>
          <Button
            variant='outlined'
            className={[classes.btn, classes.expenseBtn]}
          >
            Subtract
          </Button>
          <Button
            variant='outlined'
            className={[classes.btn, classes.savingsBtn]}
          >
            Save
          </Button>
        </div>
      </div>
      <div className={classes.componentOuter}>
        <div className={classes.componentInner}>
          <TextField
            className={classes.textField}
            fullWidth
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
