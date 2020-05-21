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

import NewLoan from '../views/loan/create';
import EditLoan from '../views/loan/edit';
import Loan from '../views/loan';

import NewAsset from '../views/asset/create';
import EditAsset from '../views/asset/edit';
import Asset from '../views/asset';

import NewIncome from '../views/income/create';
import EditIncome from '../views/income/edit';
import Income from '../views/income';




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

        <PrivateRoute path="/Loan/create" component={NewLoan} exact={true} /> 
        <PrivateRoute path="/Loan" component={Loan} exact={true} /> 
        <PrivateRoute path="/Loan/:id" component={EditLoan} exact={true} /> 

        <PrivateRoute path="/Asset/create" component={NewAsset} exact={true} /> 
        <PrivateRoute path="/Asset" component={Asset} exact={true} /> 
        <PrivateRoute path="/Asset/:id" component={EditAsset} exact={true} /> 

        <PrivateRoute path="/Income/create" component={NewIncome} exact={true} /> 
        <PrivateRoute path="/Income" component={Income} exact={true} /> 
        <PrivateRoute path="/Income/:id" component={EditIncome} exact={true} /> 
     {/*   <PrivateRoute path="/admin" component={AdminPage} />
     
      <PrivateRoute path="/addAmount/:id" component={EditProductPage} />
        <Route component={Practice} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
