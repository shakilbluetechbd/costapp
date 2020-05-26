import React from 'react';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

import { LocaleProvider, DatePicker, NavBar, Button, WhiteSpace, WingBlank, Picker, Drawer, List, Icon } from 'antd-mobile';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >Category</List.Item>);
          }
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >Category{index}</List.Item>);
        })}
      </List>
    );
  }
}

export default SideBar;