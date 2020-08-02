import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  componentOuter: theme.component.outer,
  componentInner: theme.component.inner,
}));

const Item = () => {
  const classes = useStyles();

  return (
    <div className={classes.componentOuter}>
      <div className={classes.componentInner}></div>
    </div>
  );
};

export default Item;
