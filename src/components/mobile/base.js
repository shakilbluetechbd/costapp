import React from 'react';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

import { LocaleProvider, DatePicker, NavBar, Button, WhiteSpace, WingBlank, Picker, Drawer, List, Icon } from 'antd-mobile';
import Sidebar from "./nav";

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];
const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: 'Another1',
      value: 'Sel',
    },
    {
      label: 'Another1',
      value: 'sel',
    },
  ],
];
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

    return ( <LocaleProvider locale={enUS}>
      <div style={{ height: '100%' }}>
   
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('docked')}>
        Costapp
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={Sidebar}
        docked={this.state.docked}
      >
        <WingBlank>
          <Button type="primary">default</Button><WhiteSpace />
          <Picker
            data={seasons}
            title="New"
            cascade={false}
            // extra="请选择(可选)"
            value={this.state.sValue}
            onChange={v => this.setState({ sValue: v })}
            onOk={v => this.setState({ sValue: v })}
            // okText="okay"
            // dismissText="cancel"
          >
            <List.Item arrow="horizontal">Multiple</List.Item>
          </Picker>
           
          <DatePicker
          value={this.state.date}
          onChange={date => this.setState({ date })}
          mode="date"
        >
          <List.Item arrow="horizontal">Datetime</List.Item>
        </DatePicker>
        </WingBlank>

      </Drawer>
     

    </div>
    </LocaleProvider>);
  }
}


export default App;