import React, { Fragment } from 'react';
import {
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(2),
  },
  formElements: { margin: theme.spacing(1) },
  typeSelect: { width: '10%' },
  categorySelect: { width: '15%' },
  descriptionField: { width: '43%' },
  amountField: { width: '15%' },
  submitButton: { width: '10%', marginTop: theme.spacing(2) },
}));

const QuickAddForm = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <form>
        <FormControl
          variant='outlined'
          className={classes.formControl}
          className={[classes.typeSelect, classes.formElements]}
        >
          <InputLabel id='transaction-type'>Type</InputLabel>
          <Select
            id='transaction-type'
            // value={age}
            // onChange={handleChange}
            label='Type'
          >
            <MenuItem value='income'>income</MenuItem>
            <MenuItem value='expense'>expense</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name='description'
          variant='outlined'
          id='description'
          label='Description'
          className={[classes.descriptionField, classes.formElements]}
        />
        <FormControl
          variant='outlined'
          className={classes.formControl}
          className={[classes.categorySelect, classes.formElements]}
        >
          <InputLabel id='transaction-category'>Category</InputLabel>
          <Select
            id='transaction-category'
            // value={age}
            // onChange={handleChange}
            label='Category'
          >
            {['food', 'transportation', 'blah'].map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name='amount'
          variant='outlined'
          id='amount'
          label='Amount'
          className={[classes.amountField, classes.formElements]}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          className={[classes.submitButton, classes.formElements]}
        >
          Submit
        </Button>
      </form>
    </Fragment>
  );
};

export default QuickAddForm;
