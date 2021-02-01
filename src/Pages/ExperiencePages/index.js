import React from 'react';
import Title from '../../Ui-Kit/Title';
import { Row, Col , Timeline} from 'antd';
import {   
   DashboardOutlined,
   BulbOutlined,
   CodepenCircleOutlined,
   DollarOutlined,
   AndroidOutlined
  } from '@ant-design/icons';

import 'antd/dist/antd.css';
import Skill from '../../Ui-Kit/Skill';
import Service from '../../Ui-Kit/Service';


function Experience () {
    const skill = [{
        id : 1,
        skillName : "HTML",
        progress : 90
    }, {
        id : 2,
        skillName : "CSS",
        progress : 85
    }, {
        id : 3,
        skillName : "Javascript",
        progress : 90
    }, {
        id : 4,
        skillName : "ReactJs",
        progress : 80
    }, {
        id : 5,
        skillName : "Java Web",
        progress : 85
    },
    
]

    return (
        <>
        <div style={{backgroundColor : '#fff'}}>
            <Title title ="Work Experience"/>
            <div style={{marginTop : '50px',  marginBottom : '50px'}}>
                <Row justify="center">
                    <Col span={16}>
                    <Timeline mode='left'>
                        <Timeline.Item  dot={<DashboardOutlined style={{fontSize : '30px'}}/>}>Experience Timeline</Timeline.Item>
                        <Timeline.Item label="Jan 2014 ~ Jun 2014">
                            <b>PT Astra Otoparts Div Winteq</b> <br/>
                            Internship Program. Propose Final Project for Process Design Improvement about 
                            Wintor Process Asssembling.
                        </Timeline.Item>
                        <Timeline.Item label="September 2014 ~ Now">
                            <b>PT Denso Indonesia as Production Engineering</b> <br/>
                            As a leader of Line Development for New Model, New Line,Improvement, 
                            Reduction Cost Activity , Productivity , Capacity , Process Design, and others.
                        </Timeline.Item>
                    </Timeline>
                    </Col>
                </Row>
            </div> 
        </div>
        <div style={{backgroundColor : '#fff' , padding : '5px'}}>
            <Title title ="Programming Skill"/>
            <div style={{marginTop : '50px',  marginBottom : '50px'}}>
                <Row justify="center">
                    <Col span={22}>
                        {skill.map(value => {
                            return (
                                <Skill skillName={value.skillName} progress={value.progress} key={value.id}/>
                            )
                        })}
                    </Col>
                </Row>
            </div> 
        </div>
        <div style={{backgroundColor : '#fff' , marginTop: '50px'}}>
            <Title title ="My Service"/>
            <div style={{marginTop : '50px',  marginBottom : '50px'}}>
                <Row justify="center">
                    <Col span={11}>
                        <BulbOutlined style={{fontSize : '100px'}}/>
                        <Service 
                        title = 'Inovative Ideas'
                        desc ='I am ready to start from scratch, or continue the ongoing projects. 
                        I always give innovative ideas to build the best applications.'/>
                    </Col>
                    <Col span={11}>
                        <CodepenCircleOutlined style={{fontSize : '100px'}}/>
                        <Service 
                            title = 'Clean Code'
                            desc ='I always give a clean code to the consumer so the 
                            application is easy to understand and easy to develop.'/>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop : '20px'}}>
                    <Col span={11}>
                        <DollarOutlined  style={{fontSize : '100px'}}/>
                        <Service 
                        title = 'Low Price'
                        desc ='Tell your great app to me. Adjust your budget. And "BOOM", 
                        your app ready to published.'/>
                    </Col>
                    <Col span={11}>
                        <AndroidOutlined style={{fontSize : '100px'}}/>
                        <Service 
                            title = 'Best Result'
                            desc = 'I will give you the best applications for your best ideas.'/>
                    </Col>
                </Row>
            </div> 
        </div>
        </>
    )
}

export default Experience;