import React, { Component } from 'react';
import Profile from './Pages/ProfilePages';
import Experience from './Pages/ExperiencePages';
import Home from './Pages/HomePages';
import Certificate from './Pages/CertificatePages';
import ContactPages from './Pages/ContactPages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  RadarChartOutlined,
  ContactsOutlined,
  ContainerOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      collapsed: false,
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() { 
    const { Header, Content, Footer, Sider } = Layout;
   
    return ( 
            <>
            <Router>
              <Layout>
                  <Sider
                    style={{
                      overflow: 'auto',
                      height: '100vh',
                      position: 'fixed',
                      left: 0,
                    }}
                  >
                    <div className="logo" />
                    <div className="name">Asep Syafrudin</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                      </Menu.Item>
                      <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/profile">Profile</Link>
                      </Menu.Item>
                      <Menu.Item key="3" icon={<RadarChartOutlined />}>
                        <Link to="/experience">Experience</Link>
                      </Menu.Item>
                      <Menu.Item key="4" icon={<ContainerOutlined/>}>
                        <Link to="/certificate">Certificate</Link>
                      </Menu.Item>
                      <Menu.Item key="5" icon={<ContactsOutlined />}>
                        <Link to="/contact">Contact</Link>
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} > 
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                      <div className="site-content" style={{ padding: 24, textAlign: 'center' }}>
                        <Switch>
                          <Route path="/experience">
                            <Experience/>
                          </Route>
                          <Route path="/profile">
                            <Profile/>
                          </Route>
                          <Route path="/certificate">
                            <Certificate/>
                          </Route>
                          <Route path="/contact">
                            <ContactPages/>
                          </Route>
                          <Route path="/">
                            <Home/>
                          </Route>
                        </Switch>
                      </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Copyright asepsyafrudin.com ©2021 using Ant Design</Footer>
                  </Layout>
                </Layout>
            </Router>
            </>
     );
  }
}
 
export default App;