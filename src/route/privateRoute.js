import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import Header from '../components/general/Header';
import auth from '../helpers/auth';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      auth.isLoggedIn() ? (
        <div>
          {/*<Header/>*/}
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/login" />
        )
    )} />
  );

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStateToProps)(PrivateRoute);
export default PrivateRoute;
