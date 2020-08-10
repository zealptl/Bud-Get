import React, { useState, useContext, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const { signInUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      console.error(error);
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      console.log('Please fill in all the fields');
    } else {
      signInUser({
        email,
        password,
      });
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
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            name='email'
            variant='outlined'
            id='email'
            label='Email Address'
            autoComplete='email'
            margin='normal'
            onChange={onChange}
            value={email}
            required
            fullWidth
            autoFocus
          />
          <TextField
            name='password'
            variant='outlined'
            id='password'
            label='Password'
            type='password'
            margin='normal'
            onChange={onChange}
            value={password}
            required
            fullWidth
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to='/signup'>
                <MaterialLink variant='body2'>
                  {"Don't have an account? Sign Up"}
                </MaterialLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
