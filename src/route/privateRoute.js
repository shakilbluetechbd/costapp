import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import Header from '../components/general/Header';
import {
    getToken, clearToken, decodeToken, setToken,
} from '../helpers/auth';

const check=()=>{
    const token= getToken();
    return !!token
}

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
        check() ? (
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
