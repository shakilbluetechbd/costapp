import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space, Spin, Skeleton } from 'antd';
import Form from './form2';
import Base from '../../components/base';
import loanActions from '../../redux/loan/actions';




class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: props.isUpdated,
    }
  }

  componentDidMount() {
    const {
      match, getLoan,
    } = this.props;
    const { id } = match.params;
    getLoan({ id });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props)
    console.log("stay", state)
    const {
      match,
    } = props;
    const { id } = match.params;
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    if (props.loan && props.loan.id == id) {
      update.loan = props.loan;
    }
    update.isUpdated = props.isUpdated;

    if (props.isUpdated && !state.isUpdated) {
      message.success('This is a success message');
      props.history.push('/loan');

    }
    return update;
  }

  onSubmit = (data) => {
    const { updateLoan, match } = this.props;
    const { id } = match.params;
    updateLoan({ id, data });
  }

  render() {
    const { loan } = this.state;
    const { isLoading, isUpdating } = this.props;

    return (
      <Base title="Loan" subtitle="Edit" isLoading={isLoading} isUpdating={isUpdating} >
        {loan && <Form loan={loan} onSubmit={this.onSubmit} isLoading={isLoading} isUpdating={isUpdating} />}
      </Base>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isUpdated: state.loan.isUpdated,
    isUpdating: state.loan.isUpdating,
    isLoading: state.loan.isLoading,
    loan: state.loan.loan,
  }),
  {
    updateLoan: loanActions.updateLoan.request,
    getLoan: loanActions.getLoan.request,
  },
)(create);
