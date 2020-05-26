import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
// import axios from 'axios';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col, Spin, Space } from 'antd';
import {isMobile} from 'react-device-detect';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
    }
  }
  componentDidMount() {
    if (isMobile) {
    this.props.history.push('/mobile/login');
    }
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};
    // if (props.isLoggingIn !== state.isLoggingIn) {
    //   update.isLoggingIn = props.isLoggingIn;
    // }
    update.isLoggedIn = props.isLoggedIn;

    if (props.isLoggedIn && !state.isLoggedIn) {
      message.success('This is a success message');
      props.history.push('/');
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
    
    const { isLoggingIn } = this.props;
   
   
   if (isLoggingIn  ){
    return(
      <Space style={{paddingTop:'350px',paddingLeft:'540px'  }} size="middle">
      <Spin size="large" />
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
        Or <a href="/register">register now!</a>
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
  }),
  { login: actions.login.request },
)(Login);