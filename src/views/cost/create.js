import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space } from 'antd';
import Form from './form2';
import Base from '../../components/base';
import costActions from '../../redux/cost/actions';




class create extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isCreated:props.isCreated,
     }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props",props)
    console.log("stay",state)
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    update.isCreated = props.isCreated;

    if (props.isCreated && !state.isCreated) {
      message.success('This is a success message');
      props.history.push('/cost');

    }
    return update;
  }

  onSubmit=(data)=>{
    const { createCost } = this.props;
    createCost(data);
  }
  
  render() { 
    return ( 
      <Base>
      <Form onSubmit={this.onSubmit}/>
      </Base>
     );
  }
}
 
export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isCreated: state.cost.isCreated,
  }),
  { createCost: costActions.createCost.request },
)(create);
