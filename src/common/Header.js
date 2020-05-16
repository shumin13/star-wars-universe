import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '12px 0',
    marginBottom: '1.52rem',
    borderBottom: '2px solid #9e4f60',
  },
  text: {
    color: 'rgb(221, 221, 221)',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h4' className={classes.text}>
        {props.text}
      </Typography>
    </div>
  );
};

export default Header;
