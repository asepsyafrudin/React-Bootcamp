import React , {Component} from 'react';
import Title from '../../Ui-Kit/Title'
import { Menu } from 'antd';
import { HomeOutlined, CommentOutlined } from '@ant-design/icons';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

  import RoutePages from './AddressPages';


// class ContactPages extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             current: 'mail',
//          }
//     }

//     handleClick = e => {
//         this.setState({ current: e.key });
//       };


//     render() { 
        
//         const { current } = this.state;

//         return ( 
//             <div style={{backgroundColor : '#fff'}}>
//              <Title title='My Address'/>
//              <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
//                 <Menu.Item key="mail" icon={<HomeOutlined/>}>
//                    <Link to=''> Address </Link>
//                 </Menu.Item>
//                 <Menu.Item key="app" icon={<CommentOutlined />}>
//                  <Link to={`${url}/sosialmedia`}> MySosialMedia</Link>
//                 </Menu.Item>
//             </Menu>
//             <Switch>
//                 <Route path={`${path}/:pagesName`}>
//                     <RoutePages />
//                 </Route>
//             </Switch>
//             </div>

//          );
//     }
// }
 
// export default ContactPages;




function ContactPages() {
    let { path, url } = useRouteMatch();
    return (
        <>
        <div style={{backgroundColor : '#fff'}}>
            <Menu mode="horizontal">
            <Menu.Item key="mail" icon={<HomeOutlined/>}>
                <Link to={`${url}/MyAddress`}> My Address </Link>
            </Menu.Item>
            <Menu.Item key="app" icon={<CommentOutlined />}>
                <Link to={`${url}/MySosialmedia`}> My SosialMedia</Link>
            </Menu.Item>
            </Menu>
            <Switch>
                <Route exact path={path}>
                    <RoutePages/>
                </Route>
                <Route path={`${path}/:pagesName`}>
                    <RoutePages/>
                </Route>
            </Switch>
        </div>

       
        </>
    )
    
}

export default ContactPages;