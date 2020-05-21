import React, { Component } from 'react'
import { Menu } from 'antd';
import { clearToken } from '../helpers/auth';
import { withRouter } from 'react-router-dom';
import menu from './menu';

import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import data from './menu';
const { SubMenu } = Menu;


class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currrentKey:[ '1'],
    }
  }

  componentDidMount() {
    const url = window.location.pathname;
    let u = data;
    // const currrentMenu = data.find(item => item.link === url);

    // this.setState({ currrentKey: [currrentMenu.key] });

  }

  handleClick = (link) => {
    this.props.history.push(link);
  }

  render() {
    const { currrentKey } = this.state;
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item> */}

        {data.map(item =>
          <Menu.Item onClick={() => this.handleClick(item.link)} key={item.key} icon={<PieChartOutlined />}>
            {item.title}
          </Menu.Item>
        )}


        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Cost">
          <Menu.Item key="3" onClick={() => { this.props.history.push('/cost/create') }}>New</Menu.Item>
          <Menu.Item key="4" onClick={() => { this.props.history.push('/cost') }}>List</Menu.Item>

          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
        <Menu.Item key="9" icon={<TeamOutlined />} onClick={() => { clearToken(); this.props.history.push('/login') }}> logout </Menu.Item>
      </Menu>
    )
  }
}
export default withRouter(nav);