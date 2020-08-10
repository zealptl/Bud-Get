import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as MaterialLink,
  Grid,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import AuthContext from '../../context/auth/AuthContext';

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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const { signUpUser, error, clearError, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      console.error(error);
    }
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      console.log('Plese enter all fields');
    } else if (password !== password2) {
      console.log('Passwords do nott match');
    } else {
      signUpUser({ firstName, lastName, email, password });
    }
  };

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
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                variant='outlined'
                id='firstName'
                label='First Name'
                onChange={onChange}
                value={firstName}
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='lastName'
                variant='outlined'
                id='lastName'
                label='Last Name'
                onChange={onChange}
                value={lastName}
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                variant='outlined'
                id='email'
                label='Email Address'
                autoComplete='email'
                onChange={onChange}
                value={email}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                variant='outlined'
                id='password'
                label='Password'
                type='password'
                onChange={onChange}
                value={password}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password2'
                variant='outlined'
                id='password2'
                type='password'
                label='Repeat Password'
                onChange={onChange}
                value={password2}
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submit}
            fullWidth
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/signin'>
                <MaterialLink variant='body2'>
                  {'Already have an account? Sign In'}
                </MaterialLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
