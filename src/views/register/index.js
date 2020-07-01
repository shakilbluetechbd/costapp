import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
// import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Row, Col, message,Space, Spin } from 'antd';
import './register.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: props.isRegistered,
      errors: props.errors,
      isRegistering: props.isRegistering,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};
    update.isRegistered = props.isRegistered;
    update.isRegistering = props.isRegistering;
    update.errors = props.errors;

    if (props.isRegistered && !state.isRegistered) {
      message.success('Registration Successful');
      props.history.push('/login');
    }

    if (props.errors && !state.errors) {
      message.error('Registration Failed');
      // props.history.push('/');
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

    const { isRegistering } = this.state;

    if (isRegistering) {

      return (
        <Space size="middle">

          <div style={{ textAlign: "center", marginLeft: 700, marginTop: 250 }}>
            <Spin size="large" />
          </div>
        </Space>
      )
    }
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
        Or <a  style={{marginLeft:100}} onClick={() => this.props.history.push('/login')}>Log in!</a>
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
    isRegistered: state.auth.isRegistered,
    isRegistering: state.auth.isRegistering,
    errors: state.auth.errors,
  }),
  { register: actions.register.request },
)(Login);