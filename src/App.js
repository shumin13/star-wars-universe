import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import Navbar from './common/Navbar';
import People from './people/People';
import Profile from './profile/Profile';

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='lg'>
        <CssBaseline />
        <Switch>
          <Route path='/people/:personId'>
            <Profile />
          </Route>
          <Route path='/people'>
            <People />
          </Route>
          <Route path='*'>
            <Redirect to='/people' />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
