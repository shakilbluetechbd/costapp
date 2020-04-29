import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/auth/actions';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    update.isLoggedIn = props.isLoggedIn;

    if (props.isLoggedIn && !state.isLoggedIn) {
      debugger
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
      username: this.state.email,
      password: this.state.password,
      grant_type: "password",
      client_id: "11",
      client_secret: "ViLhWdE0DHVMZGvx0IpH7Gd78SgrQWyFvXbnqzHC",
    }
    this.props.login(data);
    // axios.post('http://calm-depths-13936.herokuapp.com/oauth/token', data,{'Content-type':'Application/json'})
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  }
  render() {
    return (

      <div>
        Login:
        <label>Email:</label>
        <input onChange={this.handleChange} type='email' name='email' />
        <label>password:</label>
        <input onChange={this.handleChange} type='password' name='password' />
        <button onClick={this.handleSubmit} >Login</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
  }),
  { login: actions.login.request },
)(Login);