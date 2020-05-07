import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import Practice from '../views/practice';
import Login from '../views/login';
import Home from '../views/home';




export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute  path="/practice" component={Practice} exact={true} />
        <PublicRoute path="/login" component={Login} exact={true} /> 
        <PrivateRoute path="/" component={Home} exact={true} /> 
     {/*   <PrivateRoute path="/admin" component={AdminPage} />
     
      <PrivateRoute path="/addAmount/:id" component={EditProductPage} />
        <Route component={Practice} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
