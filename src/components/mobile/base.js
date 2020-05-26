import React from 'react';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { clearToken } from '../../helpers/auth';


import { LocaleProvider, DatePicker, NavBar, Button, WhiteSpace, WingBlank, Picker, Drawer, List, Icon, Toast } from 'antd-mobile';
import menu from './menu'
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    const { title, buttons } = this.props;
    const sidebar = (<List>
      {menu.map((i, index) => {
        return (<List.Item key={i.key}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          multipleLine
          onClick={() => this.props.history.push(i.link)}
        >{i.title}</List.Item>);
      })}
      <List.Item key={100} onClick={() => { clearToken(); Toast.success("Logout Succesfully"); this.props.history.push('/mobile/login') }}>Logout</List.Item>
    </List>);

    return (<LocaleProvider locale={enUS}>
      <div style={{ height: '100%' }}>

        <NavBar
          // style={{ position: "fixed" }}
          icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.onDock('docked')}
          rightContent={buttons ? [
            ...buttons,
            <Icon key="3" type="left" onClick={() => this.props.history.goBack()} />,
          ]:
          [
            <Icon key="3" type="left" onClick={() => this.props.history.goBack()} />,
          ]
        }
        >
          {title }
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebarStyle={{ border: '1px solid #ddd' }}
          sidebar={sidebar}
          docked={this.state.docked}
        >
          <WingBlank>
            {this.props.children}
          </WingBlank>
        </Drawer>
      </div>
    </LocaleProvider>);
  }
}


export default withRouter(App);