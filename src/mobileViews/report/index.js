import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Table, Row, Col, Card } from 'antd';
import Form from './searchForm';
import Base from '../../components/mobile/base';
import reportActions from '../../redux/report/actions';
import {  Icon } from 'antd-mobile';

import {
  PlusCircleTwoTone,
} from '@ant-design/icons';
import cost from '../cost';

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

      payload: {
        sortBy: {
          name: "id",
          value: "DESC"
        }
      },
      link: "cost"

    }
  }
  componentDidMount() {
    const { getSearch, getReport } = this.props;
    getSearch({ link: "cost", payload: {}, pagination: defaultPagination });
    getReport({ link: "cost", payload: {}, pagination: defaultPagination });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props)
    console.log("stay", state)
    const update = {};

    if (props.isLoading !== state.isLoading) {
      update.isLoading = props.isLoading;
    }

    if (props.searchResult) {
      update.searchResult = props.searchResult;
      update.pagination = {
        current: props.searchResult.data.current_page,
        pageSize: props.searchResult.data.per_page,
        total: props.searchResult.data.total,
      };
    }
    if (props.report) {
      update.report = props.report.data;
    }
    update.isCreated = props.isCreated;

    if (props.isCreated && !state.isCreated) {
      // props.history.push('/');
      message.success('This is a success message');
    }
    return update;
  }

  handleRefresh = (page) => {
    const { pagination } = this.state;
    pagination.current = page.current;
    pagination.pageSize = page.pageSize;
    this.setState({
      pagination,
    });
    const { payload, link } = this.state;
    const { getSearch, getReport } = this.props;
    getSearch({ link, payload, pagination: pagination });
    getReport({ link, payload, pagination: pagination });
  }

  onChange = name => e => {
    console.log(name, e)
    const { payload } = this.state;
    if (name === "name") {
      payload.name = e.target.value;
    }
    else if (name === "link") {
      this.setState({ link: e });
      const { getSearch, getReport } = this.props;
      getSearch({ link: e, payload, pagination: defaultPagination });
      getReport({ link: e, payload, pagination: defaultPagination });
    }
    else if (name === "toDate" || name === "fromDate") {
      payload[name] = e.format('YYYY-MM-DD');
    }
    else if (name === "toValue" || name === "fromValue") {
      payload[name] = e;
    }
    else if (name === "sortBy") {
      payload.sortBy.name = e;
    }
    else if (name === "sort") {
      payload.sortBy.value = e;
    }
    if (name !== "link") {
      this.onSearch();
    }
  }

  onSearch = () => {
    const { payload, link } = this.state;
    const { getSearch, getReport } = this.props;
    getSearch({ link, payload, pagination: defaultPagination });
    getReport({ link, payload, pagination: defaultPagination });
  }

  render() {
    const { searchResult, isLoading, payload, link, report, pagination } = this.state;
    const { total, average, count } = report || '';

    const buttons = ([<Icon style={{ marginRight: '16px' }} key="1" type="plus" onClick={() => this.props.history.push(`/mobile/${link}/create`)} />])
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
        // responsive: ['md'],
      },
      {
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render: id => <Button type="primary" onClick={() => this.props.history.push(`/mobile/${link}/${id}`)}>Edit</Button>,

      },
    ];

    const tableProps = {
      dataSource: searchResult && searchResult.data && searchResult.data.data && searchResult.data.data,
      pagination,
      loading: isLoading,
      onChange: (page) => {
        this.handleRefresh(page);
      },
      columns,
    };
    return (
      <Base buttons={buttons} title={link+" report"} subtitle="Report" >
        <Row>
          <Col span={24}>
            <Form payload={payload} link={link} handleChange={this.onChange} onSearch={this.onSearch} />
          </Col>
          {/* <Col span={6}>
            <Card loading={isLoading} title="Report" style={{ width: "100%" }}>
              <p>Total Result: {count}</p>
              <p>Total {link}: {total}</p>
              <p>Average {link}: {average}</p>
            </Card>
          </Col> */}
        </Row>
        <div className="search-result-list">
          <Table {...tableProps} />
        </div>
      </Base >
    );
  }
}

export default connect(
  state => ({
    isLoading: state.report.isLoading,
    searchResult: state.report.searchResult,
    report: state.report.report,
  }),
  {
    getSearch: reportActions.getSearch.request,
    getReport: reportActions.getReport.request,

  },
)(create);
