import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './Login';

const Auth = () => {
  return (
    <>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </>
  )
}
export default Auth;
