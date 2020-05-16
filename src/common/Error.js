import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const Error = ({ error }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open}>
      <Alert severity='error' onClose={handleClose}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default Error;
