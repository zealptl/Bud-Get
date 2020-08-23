import React, { Fragment, useContext, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { ExitToAppRounded as ExitToAppRoundedIcon } from '@material-ui/icons';
import { DRAWER_WIDTH } from '../../utils/constants';

import AuthContext from '../../context/auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
  },
  userGreeting: {
    marginRight: theme.spacing(3),
  },
  logoutIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ name }) => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading, user, loadUser, signOutUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            {name}
          </Typography>
          <Typography variant='h6' className={classes.userGreeting}>
            Hello {user && user.firstName}
          </Typography>
          <Button color='inherit' startIcon={<ExitToAppRoundedIcon />}>
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
