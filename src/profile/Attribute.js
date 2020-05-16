import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  value: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

const Attribute = ({ attr, value }) => {
  const classes = useStyles();

  return (
    <Typography gutterBottom>
      {attr}: <span className={classes.value}>{value}</span>
    </Typography>
  );
};

export default Attribute;
