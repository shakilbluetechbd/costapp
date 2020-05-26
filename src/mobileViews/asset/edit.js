import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Space, Spin, Skeleton } from 'antd';
import Form from './form2';
import Base from '../../components/mobile/base';
import assetActions from '../../redux/asset/actions';




class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: props.isUpdated,
    }
  }

  componentDidMount() {
    const {
      match, getAsset,
    } = this.props;
    const { id } = match.params;
    getAsset({ id });
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
    if (props.asset && props.asset.id == id) {
      update.asset = props.asset;
    }
    update.isUpdated = props.isUpdated;

    if (props.isUpdated && !state.isUpdated) {
      message.success('This is a success message');
      props.history.push('/asset');

    }
    return update;
  }

  onSubmit = (data) => {
    const { updateAsset, match } = this.props;
    const { id } = match.params;
    updateAsset({ id, data });
  }

  render() {
    const { asset } = this.state;
    const { isLoading, isUpdating } = this.props;

    return (
      <Base title="Asset" subtitle="Edit" isLoading={isLoading} isUpdating={isUpdating} >
        {asset && <Form asset={asset} onSubmit={this.onSubmit} isLoading={isLoading} isUpdating={isUpdating} />}
      </Base>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    isUpdated: state.asset.isUpdated,
    isUpdating: state.asset.isUpdating,
    isLoading: state.asset.isLoading,
    asset: state.asset.asset,
  }),
  {
    updateAsset: assetActions.updateAsset.request,
    getAsset: assetActions.getAsset.request,
  },
)(create);
