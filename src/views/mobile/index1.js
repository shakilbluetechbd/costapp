/* eslint global-require:0, no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar, Button, WhiteSpace, WingBlank, Picker, List } from 'antd-mobile';
import React from 'react';
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

export default class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
          >
            OneLevel menu
          </NavBar>
        </div>

        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
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
            okText="okay"
            dismissText="cancel"
          >
            <List.Item arrow="horizontal">Multiple</List.Item>
          </Picker>
        </WingBlank>

      </div>
    );
  }
}
