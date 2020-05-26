import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space, Spin, Skeleton } from 'antd';
import Form from './form2';
import Base from '../../components/mobile/base';
import costActions from '../../redux/cost/actions';
import { Toast } from 'antd-mobile';




class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: props.isUpdated,
    }
  }

  componentDidMount() {
    const {
      match, getCost,
    } = this.props;
    const { id } = match.params;
    getCost({ id });
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
    if (props.cost && props.cost.id == id) {
      update.cost = props.cost;
    }
    update.isUpdated = props.isUpdated;

    if (props.isUpdated && !state.isUpdated) {
      Toast.success(' success ');
      props.history.push('/mobile/cost');

    }
    return update;
  }

  onSubmit = (data) => {
    const { updateCost, match } = this.props;
    const { id } = match.params;
    updateCost({ id, data });
  }

  render() {
    const { cost } = this.state;
    const { isLoading, isUpdating } = this.props;

    return (
      <Base title="Cost" subtitle="Edit" isLoading={isLoading} isUpdating={isUpdating} >
        {cost && <Form cost={cost} onSubmit={this.onSubmit} isLoading={isLoading} isUpdating={isUpdating} />}
      </Base>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isUpdated: state.cost.isUpdated,
    isUpdating: state.cost.isUpdating,
    isLoading: state.cost.isLoading,
    cost: state.cost.cost,
  }),
  {
    updateCost: costActions.updateCost.request,
    getCost: costActions.getCost.request,
  },
)(create);
