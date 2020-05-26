import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space } from 'antd';
import Form from './form2';
import Base from '../../components/mobile/base';
import incomeActions from '../../redux/income/actions';




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
      props.history.push('/income');

    }
    return update;
  }

  onSubmit=(data)=>{
    const { createIncome } = this.props;
    createIncome(data);
  }
  
  render() { 
    const { isCreating } = this.props;
    return ( 
      <Base title="Income" subtitle="Create" isLoading={isCreating} >
      <Form onSubmit={this.onSubmit}/>
      </Base>
     );
  }
}
 
export default connect(
  state => ({
    isCreating: state.income.isCreating,
    isCreated: state.income.isCreated,
  }),
  { createIncome: incomeActions.createIncome.request },
)(create);
