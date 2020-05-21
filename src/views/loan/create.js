import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space } from 'antd';
import Form from './form2';
import Base from '../../components/base';
import loanActions from '../../redux/loan/actions';




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
      props.history.push('/loan');

    }
    return update;
  }

  onSubmit=(data)=>{
    const { createLoan } = this.props;
    createLoan(data);
  }
  
  render() { 
    const { isCreating } = this.props;
    return ( 
      <Base title="Loan" subtitle="Create" isLoading={isCreating} >
      <Form onSubmit={this.onSubmit}/>
      </Base>
     );
  }
}
 
export default connect(
  state => ({
    isCreating: state.loan.isCreating,
    isCreated: state.loan.isCreated,
  }),
  { createLoan: loanActions.createLoan.request },
)(create);
