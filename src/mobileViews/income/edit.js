import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space, Spin, Skeleton } from 'antd';
import Form from './form2';
import Base from '../../components/mobile/base';
import incomeActions from '../../redux/income/actions';




class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: props.isUpdated,
    }
  }

  componentDidMount() {
    const {
      match, getIncome,
    } = this.props;
    const { id } = match.params;
    getIncome({ id });
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
    if (props.income && props.income.id == id) {
      update.income = props.income;
    }
    update.isUpdated = props.isUpdated;

    if (props.isUpdated && !state.isUpdated) {
      message.success('This is a success message');
      props.history.push('/income');

    }
    return update;
  }

  onSubmit = (data) => {
    const { updateIncome, match } = this.props;
    const { id } = match.params;
    updateIncome({ id, data });
  }

  render() {
    const { income } = this.state;
    const { isLoading, isUpdating } = this.props;

    return (
      <Base title="Income" subtitle="Edit" isLoading={isLoading} isUpdating={isUpdating} >
        {income && <Form income={income} onSubmit={this.onSubmit} isLoading={isLoading} isUpdating={isUpdating} />}
      </Base>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isUpdated: state.income.isUpdated,
    isUpdating: state.income.isUpdating,
    isLoading: state.income.isLoading,
    income: state.income.income,
  }),
  {
    updateIncome: incomeActions.updateIncome.request,
    getIncome: incomeActions.getIncome.request,
  },
)(create);
