import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Table } from 'antd';
import Form from './form';
import Base from '../../components/base';
import assetActions from '../../redux/asset/actions';
import {
  PlusCircleTwoTone,
} from '@ant-design/icons';

const defaultPagination = {
  current: 1,
  pageSize: 10,
};


class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      pagination: defaultPagination,

    }
  }
  componentDidMount() {
    const { getAssets } = this.props;
    getAssets(defaultPagination)
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props)
    console.log("stay", state)
    const update = {};

    if (props.isLoading !== state.isLoading) {
      update.isLoading = props.isLoading;
    }

    if (props.assets) {
      update.assets = props.assets;
      update.pagination = {
        current: props.assets.data.current_page,
        pageSize: props.assets.data.per_page,
        total: props.assets.data.total,
      };
    }
    update.isCreated = props.isCreated;

    if (props.isCreated && !state.isCreated) {
      // props.history.push('/');
      message.success('This is a success message');
    }
    return update;
  }

  onSubmit = (data) => {
    const { createAsset } = this.props;
    createAsset(data);
  }

  handleRefresh = (page) => {
    const { pagination } = this.state;
    const { getAssets } = this.props;
    pagination.current = page.current;
    pagination.pageSize = page.pageSize;
    this.setState({
      pagination,
    });
    getAssets(page);
  }

  render() {
    const { assets, pagination, isLoading } = this.state;

    const buttons = (<Button onClick={()=>this.props.history.push("asset/create")} icon={<PlusCircleTwoTone />} type="primary" style={{ float: "right" }} >New</Button>)
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Amount',
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: 'Details',
        dataIndex: 'details',
        key: 'details',
        responsive: ['md'],
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        responsive: ['md'],
      },
      {
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render: id => <Button type="primary" onClick={() => this.props.history.push(`/asset/${id}`)}>Edit</Button>,

      },
    ];

    const tableProps = {
      dataSource: assets && assets.data && assets.data.data && assets.data.data,
      pagination,
      loading: isLoading,
      onChange: (page) => {
        this.handleRefresh(page);
      },
      columns,
    };
    return (
      <Base buttons={buttons} title="Asset" subtitle="List" >
        <Table {...tableProps} />
      </Base >
    );
  }
}

export default connect(
  state => ({
    isLoading: state.asset.isLoading,
    assets: state.asset.assets,
  }),
  { getAssets: assetActions.getAssets.request },
)(create);
