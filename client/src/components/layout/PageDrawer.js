import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {
  DashboardRounded as DashboardRoundedIcon,
  AddBoxRounded as AddBoxRoundedIcon,
  MonetizationOnRounded as MonetizationOnRoundedIcon,
  CreditCardRounded as CreditCardRoundedIcon,
  ShowChartRounded as ShowChartRoundedIcon,
  FavoriteRounded as FavoriteRoundedIcon,
  ChevronRightRounded as ChevronRightRoundedIcon,
} from '@material-ui/icons';
import { DRAWER_WIDTH } from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: DRAWER_WIDTH,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  divider: {
    marginTop: '55px',
  },
}));

const PageDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      className={classes.root}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <Divider className={classes.divider} />

        <ListItem button key='Dashboard' to='/' component={Link}>
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem button key='Quick Add' to='/quickadd' component={Link}>
          <ListItemIcon>
            <AddBoxRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Quick Add' />
        </ListItem>

        <ListItem button key='Income' to='/income' component={Link}>
          <ListItemIcon>
            <MonetizationOnRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Income' />
        </ListItem>

        <ListItem button key='Expense' to='/expense' component={Link}>
          <ListItemIcon>
            <CreditCardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Expense' />
        </ListItem>

        <ListItem button key='Trends' to='/trends' component={Link}>
          <ListItemIcon>
            <ShowChartRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Trends' />
        </ListItem>

        <ListItem button key='Wishlist' to='/wishlist' component={Link}>
          <ListItemIcon>
            <FavoriteRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Wishlist' />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default PageDrawer;
