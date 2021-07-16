import './App.css';
import React from 'react';
import { Layout } from 'antd';
import Menus from './layout';
// import Nav from './components/nav';
import {HashRouter } from 'react-router-dom';
import ContentMain from './components/contentMain';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
class App extends React.Component{
  // constructor(){
  //   super()
    state = {
      message:'hello world!',
      collapsed:false
    }
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

  // }
  render(){
    return (
      <HashRouter>
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menus></Menus>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            {/* <Nav></Nav> */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           <ContentMain></ContentMain>
          </Content>
        </Layout>
      </Layout>
      </HashRouter>
    )
  }
}


export default App;
