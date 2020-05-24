import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, DatePicker, Col, Row, Select } from 'antd';
import moment from 'moment';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  // wrapperCol: { span: 10 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onFinish = values => {
    const { onSearch } = this.props;
    onSearch();
  };
  nameChange = (e) => {
    const { value } = e.target;
    let { count } = this.state
    this.setState({ name: value + count, count: count + 1 });
  }
  render() {
    const { payload, link, handleChange } = this.props;
    const { name, toDate, fromDate, toValue, fromValue, sortBy } = payload || '';
    const { name: sortByname, value } = sortBy;
    // const { name } = this.state;

    const field = (data) => {
      const obj = [];
      const name = data && Object.keys(data);
      name && name.map(item => data[item] && obj.push({ name: [item], value: data[item] }))
      console.log(obj)
      return obj
    }

    return (
      <Form  {...layout} fields={field({
        name,
        toValue: toValue && parseFloat(toValue),
        fromValue: fromValue && parseFloat(fromValue),
        toDate: toDate && moment(toDate, 'YYYY-MM-DD'),
        fromDate: fromDate && moment(fromDate, 'YYYY-MM-DD'),
        link,
        sortBy: sortByname,
        sort: value
      })}
        name="nest-messages" onFinish={this.onFinish}
        validateMessages={validateMessages}>
        <Row gutter={24} >
          <Col span={12}>
            <Form.Item name={'name'} label="Name"  >
              <Input onChange={handleChange("name")}  />
            </Form.Item>
          </Col >

          <Col span={12}>
            <Form.Item name={'link'} label="Report "  >
              <Select onChange={handleChange("link")}   style={{ width: 120 }} >
                <Option value="cost">Cost</Option>
                <Option value="income">Income</Option>
                <Option value="loan">Loan</Option>
                <Option value="asset">Asset</Option>
              </Select>
            </Form.Item>
          </Col >

        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="toDate" label="To Date"  >
              <DatePicker onChange={handleChange("toDate")} />
            </Form.Item>
          </Col >
          <Col span={12}>
            <Form.Item name="fromDate" label="From Date"  >
              <DatePicker onChange={handleChange("fromDate")} />
            </Form.Item>
          </Col >
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name={'toValue'} label="Highest Value" rules={[{ type: 'number', min: 0 }]} >
              <InputNumber onChange={handleChange("toValue")} />
            </Form.Item>
          </Col >
          <Col span={12}>
            <Form.Item name={'fromValue'} label="Lowest Value" rules={[{ type: 'number', min: 0 }]} >
              <InputNumber onChange={handleChange("fromValue")} />
            </Form.Item>
          </Col >
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name={'sortBy'} label="Sort By"  >
              <Select onChange={handleChange("sortBy")}  style={{ width: 120 }} >
                <Option value="id">Time</Option>
                <Option value="date">date</Option>
                <Option value="value">Value</Option>
                <Option value="name">Name</Option>
              </Select>
            </Form.Item>
          </Col >
          <Col span={12}>
            <Form.Item name={'sort'} label="Asc/desc"  >
              <Select onChange={handleChange("sort")}  style={{ width: 120 }} >
                <Option value="ASC">ASC</Option>
                <Option value="DESC">DESC</Option>
              </Select>
            </Form.Item>
          </Col >
        </Row>
        {/* <Button type="primary" htmlType="submit">
          Submit
        </Button> */}
      </Form>
    );
  }
}

export default form;
