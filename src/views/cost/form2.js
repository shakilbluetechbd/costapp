import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import moment from 'moment';


const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 },
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
      name: "shakil",
      count: 1,
    }
  }

  onFinish = values => {
    const { onSubmit } = this.props;

    values.date = values.date.format('YYYY-MM-DD');
    onSubmit(values);
  };
  nameChange = (e) => {
    const { value } = e.target;
    let { count } = this.state
    this.setState({ name: value + count, count: count + 1 });
  }
  render() {
    const { cost } = this.props;
    const { name, value, details, date } = cost || '';
    // const { name } = this.state;

    const field = (data) => {
      const obj = [];
      const name = data && Object.keys(data);
      name && name.map(item => data[item] && obj.push({ name: [item], value: data[item] }))
      console.log(obj)
      return obj
    }

    // const fields = [
    //   {
    //     "name": [
    //       "name"
    //     ],
    //     "value": name,
    //   },
    //   {
    //     "name": [
    //       "details"
    //     ],
    //     "value": details,
    //   },
    //   {
    //     "name": [
    //       "value"
    //     ],
    //     "value": value && parseFloat(value),
    //   },
    //   {
    //     "name": [
    //       "date"
    //     ],
    //     "value": date && moment(date,'YYYY-MM-DD'),
    //   }
    // ]
    return (
      <Form  {...layout} fields={field({ name, value: value && parseFloat(value), details, date: date && moment(date, 'YYYY-MM-DD') })} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
        <Form.Item name={'name'} label="Name" rules={[{ required: true }]} >
          <Input />
        </Form.Item>

        <Form.Item name={'details'} label="Details" rules={[{ required: true }]} value={'here is  a descrition'}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="date" label="DatePicker" rules={[{ required: true }]} >
          <DatePicker />
        </Form.Item>

        <Form.Item name={'value'} label="Value" rules={[{ required: true, type: 'number', min: 0 }]} >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default form;
