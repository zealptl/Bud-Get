import React, { Fragment } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { ExitToAppRounded as ExitToAppRoundedIcon } from '@material-ui/icons';
import { DRAWER_WIDTH } from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
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
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            {name}
          </Typography>
          <Button color='inherit' startIcon={<ExitToAppRoundedIcon />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
