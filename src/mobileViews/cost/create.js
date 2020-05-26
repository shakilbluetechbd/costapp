import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space } from 'antd';
import Form from './form2';
import Base from '../../components/mobile/base';
import costActions from '../../redux/cost/actions';

import { Toast } from 'antd-mobile';



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
      Toast.success('This is a success message');
      props.history.push('/mobile/cost');

    }
    return update;
  }

  onSubmit=(data)=>{
    const { createCost } = this.props;
    createCost(data);
  }
  
  render() { 
    const { isCreating } = this.props;
    return ( 
      <Base title="Cost" subtitle="Create" isLoading={isCreating} >
      <Form onSubmit={this.onSubmit}/>
      </Base>
     );
  }
}
 
export default connect(
  state => ({
    isCreating: state.cost.isCreating,
    isCreated: state.cost.isCreated,
  }),
  { createCost: costActions.createCost.request },
)(create);
