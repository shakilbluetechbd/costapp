import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space } from 'antd';
import Form from './form';
import Base from '../../components/base';
import costActions from '../../redux/cost/actions';




class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: props.isCreated,
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
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
     if (props.cost) {
      update.cost = props.cost;
    }
    update.isCreated = props.isCreated;

    if (props.isCreated && !state.isCreated) {
      // props.history.push('/');
      message.success('This is a success message');
    }
    return update;
  }

  onSubmit = (data) => {
    const { updateCost } = this.props;
    updateCost(data);
  }

  render() {
    const { cost } = this.state;
   
    return (
      <Base>
        {cost && <Form cost={cost} onSubmit={this.onSubmit} />}
      </Base>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isCreated: state.cost.isCreated,
    cost: state.cost.cost,
  }),
  {
    updateCost: costActions.updateCost.request,
    getCost: costActions.getCost.request,
  },
)(create);
