import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/practice/actions";
import { clearToken } from "../../helpers/auth";

import { Table } from "antd";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getApparels, getEmployees } = this.props;
    getApparels();
    getEmployees();
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    if (props.apparels) {
      update.apparels = props.apparels;
    }

    if (props.employees) {
      update.employees = props.employees.data.data;
    }
    return update;
  }
  logout = () => {
    clearToken();
    this.props.history.push("/");
  };

  render() {
    const { employees } = this.state;
    debugger;
    const columns = [
      {
        title: "Name",
        dataIndex: "employee_name",
        key: "employee_name",
      },
      // {
      //   title: 'Age',
      //   dataIndex: 'age',
      //   key: 'age',
      // },
      // {
      //   title: 'Address',
      //   dataIndex: 'address',
      //   key: 'address',
      // },
    ];
    const { apparels } = this.state;
    return (
      <div>
        App:{apparels && apparels.data}
        <button onClick={this.logout}>logout</button>
        <Table dataSource={employees} columns={columns} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    // isLoading: state.newUser.isLoading,
    apparels: state.practice.apparels,
    employees: state.practice.employees,
  }),
  {
    getApparels: actions.getApparels.request,
    getEmployees: actions.getEmployees.request,
  }
)(Practice);
// export default Practice;
