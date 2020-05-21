import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Table } from 'antd';
import Form from './form';
import Base from '../../components/base';
import incomeActions from '../../redux/income/actions';
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
    const { getIncomes } = this.props;
    getIncomes(defaultPagination)
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props)
    console.log("stay", state)
    const update = {};

    if (props.isLoading !== state.isLoading) {
      update.isLoading = props.isLoading;
    }

    if (props.incomes) {
      update.incomes = props.incomes;
      update.pagination = {
        current: props.incomes.data.current_page,
        pageSize: props.incomes.data.per_page,
        total: props.incomes.data.total,
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
    const { createIncome } = this.props;
    createIncome(data);
  }

  handleRefresh = (page) => {
    const { pagination } = this.state;
    const { getIncomes } = this.props;
    pagination.current = page.current;
    pagination.pageSize = page.pageSize;
    this.setState({
      pagination,
    });
    getIncomes(page);
  }

  render() {
    const { incomes, pagination, isLoading } = this.state;

    const buttons = (<Button onClick={()=>this.props.history.push("income/create")} icon={<PlusCircleTwoTone />} type="primary" style={{ float: "right" }} >New</Button>)
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
        render: id => <Button type="primary" onClick={() => this.props.history.push(`/income/${id}`)}>Edit</Button>,

      },
    ];

    const tableProps = {
      dataSource: incomes && incomes.data && incomes.data.data && incomes.data.data,
      pagination,
      loading: isLoading,
      onChange: (page) => {
        this.handleRefresh(page);
      },
      columns,
    };
    return (
      <Base buttons={buttons} title="Income" subtitle="List" >
        <Table {...tableProps} />
      </Base >
    );
  }
}

export default connect(
  state => ({
    isLoading: state.income.isLoading,
    incomes: state.income.incomes,
  }),
  { getIncomes: incomeActions.getIncomes.request },
)(create);
