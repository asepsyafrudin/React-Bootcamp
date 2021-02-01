import React from 'react';
import { Row, Col } from 'antd';
import styleTitle from './style.module.css';

function Title({title}) {
    return (
        <Row>
            <Col span={24}>
                <div className={styleTitle.title}><span>{title}</span></div>
            </Col>
        </Row>
    )
}

export default Title;