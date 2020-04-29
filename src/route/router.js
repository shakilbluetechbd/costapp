import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './publicRoute';

import Practice from '../views/practice';
import Login from '../views/login';
// import AddProductPage from '../components/product/AddProductPage';
// import AddUserPage from '../components/user/AddUserPage';
// import EditProductPage from '../components/product/EditProductPage';
// import NotFoundPage from '../components/general/NotFoundPage';
// import LoginPage from '../components/general/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import AdminPage from '../components/admin/AdminPage'
// import UserPage from '../components/user/UserPage'
// import UserList from '../components/manageWallet/UserList'
// import PaymentPage from '../components/manageWallet/PaymentPage'
// import manageAdminWallet from '../components/manageAdminWallet'
// import AdminPaymentPage from '../components/manageAdminWallet/paymentPage'
// import CashOutList from '../components/manageAdminWallet/paymentList'
// import UserPaymentList  from '../components/userPayment/userPaymentList'
// import UserPurchaseList  from '../components/userPurchase/userPurchaseList'



export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Practice} exact={true} /> 
        <PublicRoute path="/login" component={Login} exact={true} /> 
     {/*   <PrivateRoute path="/admin" component={AdminPage} />
     
      <PrivateRoute path="/addAmount/:id" component={EditProductPage} />
        <Route component={Practice} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
