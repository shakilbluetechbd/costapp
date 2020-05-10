import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import Practice from '../views/practice';
import Login from '../views/login';
import Register from '../views/register';
import Home from '../views/home';
import NewCost from '../views/cost/create';
import EditCost from '../views/cost/edit';
import Cost from '../views/cost';




export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute  path="/practice" component={Practice} exact={true} />
        <PublicRoute path="/login" component={Login} exact={true} />
        <PublicRoute path="/register" component={Register} exact={true} />  
        <PrivateRoute path="/" component={Home} exact={true} /> 
        <PrivateRoute path="/Cost/create" component={NewCost} exact={true} /> 
        <PrivateRoute path="/Cost" component={Cost} exact={true} /> 
        <PrivateRoute path="/Cost/:id" component={EditCost} exact={true} /> 
     {/*   <PrivateRoute path="/admin" component={AdminPage} />
     
      <PrivateRoute path="/addAmount/:id" component={EditProductPage} />
        <Route component={Practice} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
