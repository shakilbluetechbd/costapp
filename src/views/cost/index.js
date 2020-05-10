import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Table } from 'antd';
import Form from './form';
import Base from '../../components/base';
import costActions from '../../redux/cost/actions';

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
    const { getCosts } = this.props;
    getCosts(defaultPagination)
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props)
    console.log("stay", state)
    const update = {};

    if (props.isLoading !== state.isLoading) {
      update.isLoading = props.isLoading;
    }

    if (props.costs) {
      update.costs = props.costs;
      update.pagination = {
        current: props.costs.data.current_page,
        pageSize: props.costs.data.per_page,
        total: props.costs.data.total,
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
    const { createCost } = this.props;
    createCost(data);
  }

  handleRefresh = (page) => {
    const { pagination } = this.state;
    const { getCosts } = this.props;
    pagination.current = page.current;
    pagination.pageSize = page.pageSize;
    this.setState({
      pagination,
    });
    getCosts(page);
  }

  render() {
    const { costs, pagination, isLoading } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Amount',
        dataIndex: 'value',
        width: '10%',
        key: 'value',
      },
      {
        title: 'Details',
        dataIndex: 'details',
        key: 'details',
        width: '40%',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        width: '20%',
        key: 'date',
      },
      {
        title: 'Action',
        dataIndex: 'id',
        width: '20%',
        key: 'id',
        render:id=><Button onClick={()=>this.props.history.push(`/cost/${id}`)}>Edit</Button>,

      },
    ];

    const tableProps = {
      dataSource:  costs && costs.data && costs.data.data && costs.data.data,
      pagination,
      loading: isLoading,
      onChange: (page) => {
        this.handleRefresh(page);
      },
      columns,
  };
  return(
      <Base>
  <Table {...tableProps} />
      </Base >
    );
  }
}

export default connect(
  state => ({
    isLoading: state.cost.isLoading,
    // isCreated: state.cost.isCreated,
    costs: state.cost.costs,
  }),
  { getCosts: costActions.getCosts.request },
)(create);
