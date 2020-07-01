import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
// import axios from 'axios';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col, Skeleton, Space, Spin } from 'antd';
import { isMobile } from 'react-device-detect';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: props.errors,
      isLoggedIn: props.isLoggedIn,
      isLoggingIn: props.isLoggingIn,
    }
  }
  componentDidMount() {
    if (isMobile) {
      this.props.history.push('/mobile/login');
    }
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};

    update.isLoggedIn = props.isLoggedIn;
    update.isLoggingIn = props.isLoggingIn;
    update.errors = props.errors;

    if (props.isLoggedIn && !state.isLoggedIn) {
      message.success('Login Successful');
      props.history.push('/');
    }
    if (props.errors && !state.errors) {
      message.error('Login Failed');
      // props.history.push('/');
    }
    return update;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const data = {
      username: e.username,
      password: e.password,
      grant_type: "password",
      client_id: "11",
      client_secret: "ViLhWdE0DHVMZGvx0IpH7Gd78SgrQWyFvXbnqzHC",
      // client_id: "2",
      // client_secret: "ME4jOIZJRHgN0vCUwPrBU0Y55ehy9yShtLP5Pqvb",
    }
    this.props.login(data);
  }
  render() {
    const { isLoggingIn } = this.state;

    if (isLoggingIn) {

      return (
        <Space size="middle">

          <div style={{ textAlign: "center", marginLeft: 700, marginTop: 250 }}>
            <Spin size="large" />
          </div>
        </Space>
      )
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <h1>Login</h1>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.handleSubmit}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
        </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
        </Button>
        Or <a onClick={() => this.props.history.push('/register')}>register now!</a>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout>
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