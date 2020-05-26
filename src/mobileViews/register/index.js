import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
// import axios from 'axios';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { Toast, LocaleProvider, InputItem, NavBar, Button, WhiteSpace, WingBlank, Picker, Drawer, List, Icon } from 'antd-mobile';

import auth from '../../helpers/auth';
import './register.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: props.isRegistered,
      errors: props.errors,
      payload: {
        name: '',
        email: '',
        password: ''
      },
      emailError: false,
      nameError: false,
      passwordError: false,
    }
  }
  componentDidMount() {
    if(auth.isLoggedIn()){
     this.props.history.push('/mobile')
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props);
    console.log("state", state);
    const update = {};
    update.isRegistered = props.isRegistered;

    if (props.isRegistered && !state.isRegistered) {
      Toast.success('Registration Successful');
      props.history.push('/mobile/login');
    }

    if (props.errors && !state.errors) {
      Toast.fail('Registration failed');
    }
    return update;
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleChange = (value) => {
    if (value !== "") {
      const { payload } = this.state;
      payload.name = value;
      this.setState({ nameError: false })
    }
    else {
      this.setState({ nameError: true })
    }
  }

  handleEmailChange = (value) => {
    if (this.validateEmail(value)) {
      const { payload } = this.state;
      payload.email = value;
      this.setState({ emailError: false })
    }
    else {
      this.setState({ emailError: true })
    }
  }

  handlePasswordChange = (value) => {
    if (value !== "") {
      const { payload } = this.state;
      payload.password = value;
      this.setState({ passwordError: false })
    }
    else {
      this.setState({ passwordError: true })
    }
  }

  handleSubmit = () => {
    const { payload, nameError, passwordError, emailError } = this.state;
    const { name, email, password } = payload;
    if (name !== "" && email !== "" && password !== "" && !nameError && !passwordError && !emailError) {
      this.props.register(payload);
    }
    else {
      this.handleEmailChange(email);
      this.handleChange(name);
      this.handlePasswordChange(password);
    }
  }
  render() {
    const { isRegistering } = this.props;

    return (
      <LocaleProvider locale={enUS}>
        <div style={{ height: '100%' }}>
          <NavBar>
            Costapp
    </NavBar>
          <WingBlank>
            <InputItem
              placeholder="Type Your Name"
              type="text"
              onChange={this.handleChange}
              error={this.state.nameError}
            > Name</InputItem>

            <InputItem
              placeholder="Type Your email"
              type="email"
              onChange={this.handleEmailChange}
              error={this.state.emailError}
            > Email</InputItem>
            <InputItem
              placeholder="Type Your password"
              type="password"
              onChange={this.handlePasswordChange}
              error={this.state.passwordError}
            > Password</InputItem>
            <Button loading={isRegistering} onClick={this.handleSubmit} style={{ margin: '50px' }} size="small" type="primary">Register</Button>
            <diV style={{ textAlign: "center" }}>or</diV>
            <Button style={{ margin: '50px' }} type="ghost" size="small" onClick={() => this.props.history.push('/mobile/login')}>Login</Button>

          </WingBlank>
        </div>
      </LocaleProvider>
    );
  }
}

export default connect(
  state => ({
    isRegistering: state.auth.isRegistering,
    isRegistered: state.auth.isRegistered,
    errors: state.auth.errors,
  }),
  { register: actions.register.request },
)(Login);