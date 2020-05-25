import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import Route from './route/router';

import  './index.css'



ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider >,
  document.getElementById('root')
);

serviceWorker.register();
