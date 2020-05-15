import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import People from './people/People';
import Profile from './profile/Profile';

const App = () => {
  return (
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
  );
};

export default App;
