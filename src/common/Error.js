import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 30,
  },
}));

const Error = ({ error }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Alert severity='error' variant='filled'>
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </div>
  );
};

export default Error;
