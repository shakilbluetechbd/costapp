import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
// import axios from 'axios';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

import { Form, Input, Checkbox, message } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

import { Toast, LocaleProvider, InputItem, NavBar, Button, WhiteSpace, WingBlank, Picker, Drawer, List, Icon } from 'antd-mobile';


import Base from '../../components/mobile/base';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      errors: props.errors,
      payload: {
        username: '',
        password: ''
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    update.isLoggedIn = props.isLoggedIn;

    if (props.isLoggedIn && !state.isLoggedIn) {
      Toast.success('Logged in Successfully');
      props.history.push('/mobile');
    }
    if (props.errors && !state.errors) {
      Toast.fail('Log in failed');
      // props.history.push('/');
    }
    return update;
  }

  handleChange = name => (value) => {
    const { payload } = this.state;
    payload[name] = value;
  }

  handleSubmit = (e) => {
    const { payload } = this.state;
    const data = {
      username: payload.username,
      password: payload.password,
      grant_type: "password",
      client_id: "11",
      client_secret: "ViLhWdE0DHVMZGvx0IpH7Gd78SgrQWyFvXbnqzHC",
      // client_id: "2",
      // client_secret: "ME4jOIZJRHgN0vCUwPrBU0Y55ehy9yShtLP5Pqvb",
    }
    this.props.login(data);
  }
  render() {
    const { isLoggingIn } = this.props
    const { payload } = this.state;
    const { username, password } = payload || '';
    return (

      <LocaleProvider locale={enUS}>
        <div style={{ height: '100%' }}>
          <NavBar icon={<Icon type="ellipsis" />}>
            Costapp
      </NavBar>
          <WingBlank>

            <InputItem
              placeholder="Type Your email"
              type="email"
              // value={username}
              onChange={this.handleChange('username')}
            > Email</InputItem>
            <InputItem
              placeholder="Type Your password"
              type="password"
              // value={password}
              onChange={this.handleChange("password")}
            > Password</InputItem>
            <Button loading={isLoggingIn} onClick={this.handleSubmit} style={{ margin: '50px' }} size="small" type="primary">Log In</Button>
            <diV style={{ textAlign: "center" }}>or</diV>
            <Button style={{ margin: '50px' }} type="ghost" size="small" onClick={() => this.props.history.push('/mobile/register')}>Register</Button>
          </WingBlank>
        </div>
      </LocaleProvider>


    );
  }
}

export default connect(
  state => ({
    isLoggingIn: state.auth.isLoggingIn,
    isLoggedIn: state.auth.isLoggedIn,
    errors: state.auth.errors,
  }),
  { login: actions.login.request },
)(Login);
