import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Title = (props) => {
  return (
    <Typography component='h2' variant='h6' color='default' gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
