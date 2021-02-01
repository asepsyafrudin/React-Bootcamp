import React from 'react';
import { Layout, Button, Image } from 'antd';
import photoProfile from '../../Ui-Kit/Image/PhotoProfile.JPG';
import './style.css';
import MyCv from '../../File/CvAsep.pdf';

import { DownloadOutlined } from '@ant-design/icons';

function HomePages () {
    const { Sider, Content } = Layout;
    return (
        <>
            <Layout>
            <Sider style={{backgroundColor : '#f0f2f5'}}>
                <Image
                width={250}
                src={photoProfile}
                style = {{
                    borderRadius : '15px',
                    boxShadow : '2px 2px 2px 2px'
                }}
                />
                {/* <img src ={photoProfile} alt ='foto' className='imageProfile'/> */}
            </Sider>
            <Layout>
                <Content style={{height : '450px'}}>
                    <h3><b></b>Hello, I'am</h3>
                    <span className='nameTitle'><b>Asep Syafrudin</b>
                    </span>
                    <h3>As Fullstack Developer</h3>
                    <p style={{padding:'20px', marginLeft : '50px'}}>  I always give the best effort for each projects I did. I give a solution with my creative app. 
                        You can download my CV</p>
                    <a href={MyCv}><Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'>Download</Button></a>
                </Content>
            </Layout>
            </Layout>
        </> 
    )
}

export default HomePages;