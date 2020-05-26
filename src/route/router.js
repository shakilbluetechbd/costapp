import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import Practice from '../views/practice';


import Login from '../views/login';
import Register from '../views/register';
import Home from '../views/home';

//mobile

// import Register from '../views/register';
// import Home from '../views/home';

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

import Report from '../views/report';

//mobile
import Mobile from '../views/mobile/index';
import MobileRegister from '../mobileViews/register';
import LoginMobile from '../mobileViews/login';
import HomeMobile from '../mobileViews/home';
import NewCostMobile from '../mobileViews/cost/create';
import EditCostMobile from '../mobileViews/cost/edit';
import CostMobile from '../mobileViews/cost';

import NewLoanMobile from '../mobileViews/loan/create';
import EditLoanMobile from '../mobileViews/loan/edit';
import LoanMobile from '../mobileViews/loan';

import NewAssetMobile from '../mobileViews/asset/create';
import EditAssetMobile from '../mobileViews/asset/edit';
import AssetMobile from '../mobileViews/asset';

import NewIncomeMobile from '../mobileViews/income/create';
import EditIncomeMobile from '../mobileViews/income/edit';
import IncomeMobile from '../mobileViews/income';

import ReportMobile from '../mobileViews/report';





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

        <PrivateRoute path="/report" component={Report} exact={true} /> 

     {/*   <PrivateRoute path="/admin" component={AdminPage} />
     
      <PrivateRoute path="/addAmount/:id" component={EditProductPage} />
        <Route component={Practice} /> */}

        <PublicRoute path="/mobile/login" component={LoginMobile} exact={true} />
        <PublicRoute path="/mobile1" component={Mobile} exact={true} />
        <PublicRoute path="/mobile/register" component={MobileRegister} exact={true} />  
        <PrivateRoute path="/mobile" component={HomeMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Cost/create" component={NewCostMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Cost" component={CostMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Cost/:id" component={EditCostMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Loan/create" component={NewLoanMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Loan" component={LoanMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Loan/:id" component={EditLoanMobile} exact={true} /> 

        <PrivateRoute path="/mobile/Asset/create" component={NewAssetMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Asset" component={AssetMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Asset/:id" component={EditAssetMobile} exact={true} /> 

        <PrivateRoute path="/mobile/Income/create" component={NewIncomeMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Income" component={IncomeMobile} exact={true} /> 
        <PrivateRoute path="/mobile/Income/:id" component={EditIncomeMobile} exact={true} /> 

        <PrivateRoute path="/mobile/report" component={ReportMobile} exact={true} />

      </Switch>
    </div>
  </Router>
);

export default AppRouter;
