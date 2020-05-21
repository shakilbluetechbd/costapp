import React from 'react';
import { Layout, Breadcrumb, Space, Spin, Skeleton } from 'antd';
import './home.scss';
import Nav from './nav'

const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { isLoading, isCreating, isUpdating, title, subtitle, buttons } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{ color: 'white' }}> Cost App </div>
          <Nav history={this.props.history} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{title}</Breadcrumb.Item>
              <Breadcrumb.Item>{subtitle}</Breadcrumb.Item>
              {buttons}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {isLoading && <Skeleton />}
              {(isUpdating||isCreating) && <Space size="middle">
               
              <div style={{ textAlign: "center", marginLeft:500, marginTop:100}}>
              <Spin size="large" />
              </div>
              </Space>}
              {!isLoading && !isUpdating && !isCreating && this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;