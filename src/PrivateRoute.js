import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} {...rest}/>
        : <LoginForm {...props} {...rest}/>}
    />
  )
}

export default PrivateRoute;
