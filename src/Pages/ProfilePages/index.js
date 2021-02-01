import React from 'react';
import Title from '../../Ui-Kit/Title'
import { Row, Col, Space } from 'antd';
import { Steps } from 'antd';

import {
   
    CalendarOutlined,
    UserOutlined,
    PhoneOutlined,
    MailOutlined,
    GlobalOutlined,
    HomeOutlined,
    BookOutlined,
    VideoCameraOutlined,
    PictureOutlined,
    CarOutlined
   
  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import StepKit from '../../Ui-Kit/StepKit';
  

function ProfilePages () {
    const { Step } = Steps;
    return (
            <>
                <Title title="About Me"/>
                <div style={{marginTop : '50px',  marginBottom : '50px'}}>
                    <Row justify ="center">
                        <Col span={8}>
                            <div style={{textAlign : 'left'}}>
                                <Space>
                                    <UserOutlined style={{fontSize : '20px'}}/>
                                    <span style={{fontWeight : 'bold', color : '#1890ff', fontSize: '20px' }}>Name</span>
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign : 'right'}}>
                                <span style={{fontWeight : 'normal', color : '#1890ff', fontSize: '20px' }}>Asep Syafrudin</span>     
                            </div>
                        </Col>
                    </Row>
                    <Row justify ="center">
                        <Col span={8}>
                            <div style={{textAlign : 'left'}}>
                                <Space>
                                    <CalendarOutlined style={{fontSize : '20px'}}/>
                                    <span style={{fontWeight : 'bold', color : '#1890ff', fontSize: '20px' }}>Date Of Birth</span>
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign : 'right'}}>
                                <span style={{fontWeight : 'normal', color : '#1890ff', fontSize: '20px' }}>Jakarta, 22 July 1993</span>     
                            </div>
                        </Col>
                    </Row>
                    <Row justify ="center">
                        <Col span={8}>
                            <div style={{textAlign : 'left'}}>
                                <Space>
                                    <PhoneOutlined style={{fontSize : '20px'}}/>
                                    <span style={{fontWeight : 'bold', color : '#1890ff', fontSize: '20px' }}>Phone</span>
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign : 'right'}}>
                                <span style={{fontWeight : 'normal', color : '#1890ff', fontSize: '20px' }}>+62 838 7777 8823</span>     
                            </div>
                        </Col>
                    </Row>
                    <Row justify ="center">
                        <Col span={8}>
                            <div style={{textAlign : 'left'}}>
                                <Space>
                                    <MailOutlined style={{fontSize : '20px'}}/>
                                    <span style={{fontWeight : 'bold', color : '#1890ff', fontSize: '20px' }}>Email</span>
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign : 'right'}}>
                                <span style={{fontWeight : 'normal', color : '#1890ff', fontSize: '20px' }}>asseeppsyafrudin@gmail.com</span>     
                            </div>
                        </Col>
                    </Row>
                    <Row justify ="center">
                        <Col span={8}>
                            <div style={{textAlign : 'left'}}>
                                <Space>
                                    <GlobalOutlined style={{fontSize : '20px'}}/>
                                    <span style={{fontWeight : 'bold', color : '#1890ff', fontSize: '20px' }}>Web</span>
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign : 'right'}}>
                                <span style={{fontWeight : 'normal', color : '#1890ff', fontSize: '20px' }}>asepsyafrudin.com</span>     
                            </div>
                        </Col>
                    </Row>
                    <Row justify ="center">
                        <Col span={8}>
                            <div style={{textAlign : 'left'}}>
                                <Space>
                                    <HomeOutlined style={{fontSize : '20px'}}/>
                                    <span style={{fontWeight : 'bold', color : '#1890ff', fontSize: '20px' }}>Address</span>
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign : 'right'}}>
                                <span style={{fontWeight : 'normal', color : '#1890ff', fontSize: '20px' }}>Jakarta , Indonesia</span>     
                            </div>
                        </Col>
                    </Row>
                </div>
                <Title title='My Education'/>
                <div style={{marginTop : '50px',  marginBottom : '50px'}}> 
                    <Row justify="center">
                        <Col span ={16}>
                        <Steps current={4} progressDot={StepKit}>
                            <Step title="SMPN 76 Jakarta" description="" />
                            <Step title="SMAN 77 Jakarta" description="IPA" />
                            <Step title="Politeknik Manufaktur Astra" description="Teknik Produksi dan Proses Manufaktur (TPM)" />
                            <Step title="Universitas Pancasila" description="Teknik Industri" />
                        </Steps>,
                        </Col>
                    </Row>
                </div>
                <Title title='My Hobbies'/>
                <div style={{marginTop : '50px',  marginBottom : '50px'}}> 
                    <Row justify="center">
                        <Col span ={16}>
                            <p>Enjoy the storyline deeper by reading a book, or sometimes enjoy some thrilling
                                 action scenes just to refresh myself from the routine. Traveling to a beautiful 
                                 place then take several pictures can be done to find new ideas.</p>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col span={4}>
                            <div style={{fontSize : '35px',  color : '#1890ff'}}>
                                <BookOutlined />
                            </div>
                            <div style={{fontWeight : 'bold', color : '#1890ff' , fontSize:'24px'}}>Books</div>
                        </Col>
                        <Col span={4}>
                            <div style={{fontSize : '35px',  color : '#1890ff'}}>
                                <VideoCameraOutlined />
                            </div>
                            <div style={{fontWeight : 'bold', color : '#1890ff' , fontSize:'24px'}}>Movie</div>
                        </Col>
                        <Col span={4}>
                            <div style={{fontSize : '35px',  color : '#1890ff'}}>
                                <PictureOutlined />
                            </div>
                            <div style={{fontWeight : 'bold', color : '#1890ff' , fontSize:'24px'}}>Photos</div>
                        </Col>
                        <Col span={4}>
                            <div style={{fontSize : '35px',  color : '#1890ff'}}>
                                <CarOutlined />
                            </div>
                            <div style={{fontWeight : 'bold', color : '#1890ff' , fontSize:'24px'}}>Travelling</div>
                        </Col>
                    </Row>
                </div>
            </>
    )
}

export default ProfilePages;