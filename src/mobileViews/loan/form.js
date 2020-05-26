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
    this.state = {}
  }

  onFinish = values => {
    const { onSubmit } = this.props;
    
    values.date = values.date.format('YYYY-MM-DD');
    onSubmit(values);
  };
  render() {
    const { cost } = this.props;
    const { name, value, details, date } = cost || '';
    return (
      <Form  {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
        <Form.Item name={'name'} label="Name" rules={[{ required: true }]} initialValue={name}>
          <Input  />
        </Form.Item>

        <Form.Item name={'details'} label="Details" rules={[{ required: true }]} initialValue={details}>
          <Input.TextArea value={'here is  a descrition'} />
        </Form.Item>

        <Form.Item name="date" label="DatePicker" rules={[{ required: true }]} initialValue={date && moment(date,'YYYY-MM-DD')}>
          <DatePicker  />
        </Form.Item>

        <Form.Item name={'value'} label="Value" rules={[{ required: true, type: 'number', min: 0 }]} initialValue={value && parseFloat(value)}>
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
