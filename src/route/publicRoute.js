import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import auth from '../helpers/auth';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      auth.isLoggedIn() ? (
        <Redirect to="/" />
      ) : (
          <Component {...props} />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  // isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
