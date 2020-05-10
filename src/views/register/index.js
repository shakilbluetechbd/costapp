import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
// import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import './register.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: props.isRegistered,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props",props);
    console.log("state",state);
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    update.isRegistered = props.isRegistered;

    if (props.isRegistered && !state.isRegistered) {
      props.history.push('/');
    }
    return update;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (value) => {
    // const data = {
    //   name: e.name,
    //   email: e.email,
    //   password: e.password,
    //   // grant_type: "password",
    //   // client_id: "11",
    //   // client_secret: "ViLhWdE0DHVMZGvx0IpH7Gd78SgrQWyFvXbnqzHC",
    // }
    this.props.register(value);
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <br />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.handleSubmit}
              {...formItemLayout}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />

              </Form.Item>

              <Form.Item>
                <Button style={{marginLeft:100}} type="primary" htmlType="submit" className="login-form-button">
                  Register
        </Button>
        Or <a style={{marginLeft:100}} href="/login">Log in!</a>
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
    // isLoading: state.newUser.isLoading,
    isRegistered: state.auth.isRegistered,
  }),
  { register: actions.register.request },
)(Login);