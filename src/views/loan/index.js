import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Table } from 'antd';
import Form from './form';
import Base from '../../components/base';
import loanActions from '../../redux/loan/actions';
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
    const { getLoans } = this.props;
    getLoans(defaultPagination)
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props)
    console.log("stay", state)
    const update = {};

    if (props.isLoading !== state.isLoading) {
      update.isLoading = props.isLoading;
    }

    if (props.loans) {
      update.loans = props.loans;
      update.pagination = {
        current: props.loans.data.current_page,
        pageSize: props.loans.data.per_page,
        total: props.loans.data.total,
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
    const { createLoan } = this.props;
    createLoan(data);
  }

  handleRefresh = (page) => {
    const { pagination } = this.state;
    const { getLoans } = this.props;
    pagination.current = page.current;
    pagination.pageSize = page.pageSize;
    this.setState({
      pagination,
    });
    getLoans(page);
  }

  render() {
    const { loans, pagination, isLoading } = this.state;

    const buttons = (<Button onClick={()=>this.props.history.push("loan/create")} icon={<PlusCircleTwoTone />} type="primary" style={{ float: "right" }} >New</Button>)
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
        render: id => <Button type="primary" onClick={() => this.props.history.push(`/loan/${id}`)}>Edit</Button>,

      },
    ];

    const tableProps = {
      dataSource: loans && loans.data && loans.data.data && loans.data.data,
      pagination,
      loading: isLoading,
      onChange: (page) => {
        this.handleRefresh(page);
      },
      columns,
    };
    return (
      <Base buttons={buttons} title="Loan" subtitle="List" >
        <Table {...tableProps} />
      </Base >
    );
  }
}

export default connect(
  state => ({
    isLoading: state.loan.isLoading,
    loans: state.loan.loans,
  }),
  { getLoans: loanActions.getLoans.request },
)(create);
