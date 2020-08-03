import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import {
  Avatar,
  Button,
  Container,
  TextField,
  Link,
  Typography,
  makeStyles,
  CssBaseline,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const authContext = useContext(AuthContext);
  const { signInUser, isAuthenticated, error } = authContext;
  const classes = useStyles();

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      console.log(error);
    }

    // eslint-disable-next-line
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
      console.log('Please fill  in all fields', 'danger');
    } else {
      signInUser({
        email,
        password,
      });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={onChange}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={onChange}
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
            <Link href='#' variant='body2'>
              Don't have an account? Sign Up
            </Link>
          </form>
        </div>
      </CssBaseline>
    </Container>
  );
};

export default SignIn;
