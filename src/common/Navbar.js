import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import background from '../assets/background.jpg';
import logo from '../assets/logo.png';

const useStyles = makeStyles(() => ({
  appbar: {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.9)
    ), url(${background})`,
  },
  toolbar: {
    height: 120,
    justifyContent: 'center',
    borderBottom: '2px solid rgba(170, 170, 170, 0.25)',
  },
  logo: {
    height: 105,
    cursor: 'pointer',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  let history = useHistory();

  const handleOnClick = () => {
    history.push('/people');
  };

  return (
    <AppBar position='sticky' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <img
          src={logo}
          alt='logo'
          className={classes.logo}
          onClick={handleOnClick}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
