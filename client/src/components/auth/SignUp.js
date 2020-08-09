import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {' '}
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                variant='outlined'
                required
                fullwidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='lasttName'
                variant='outlined'
                required
                fullwidth
                id='lastName'
                label='Last Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password1'
                variant='outlined'
                required
                fullWidth
                id='password1'
                label='Password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password2'
                variant='outlined'
                required
                fullWidth
                id='password2'
                label='Repeat Password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
