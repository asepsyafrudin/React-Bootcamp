import React from 'react';
import { useParams } from "react-router-dom";
import Title from '../../../Ui-Kit/Title';
import { Row, Col} from 'antd';
import { YoutubeOutlined, InstagramOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';

function RoutePages () {
    let { pagesName } = useParams();
    let pages;
    if(pagesName === 'MyAddress') {
        pages = (
        <>
       <Title title='My Address'/>
        <div style={{border : 'solid', overflow : 'hidden', marginTop : '50px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.609513634746!2d106.84540731430995!3d-6.1829854623029545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f44ed3eccdab%3A0x9d152a5c6b3f12df!2sJl.%20Kramat%20Pulo%20Dalam%202%20Gg.%2018%20No.167F%2C%20RT.10%2FRW.5%2C%20Kramat%2C%20Kec.%20Senen%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010450!5e0!3m2!1sen!2sid!4v1612113045754!5m2!1sen!2sid" 
                className ='maps'
                width="1200" 
                height="450" 
                frameborder="0" 
                style={{border:0}} 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0" title="1"></iframe>
            </div>
        </>
        )
    } else {
        pages = (
        <>
        <Title title='My Social Media'/>
        <div style = {{
            marginTop : '25px',
        }}>
            <Row justify ="space-around">
                <Col span={4}>
                    <a href='https://www.linkedin.com/in/asep-syafrudin-a3bab5179/' target="_blank" rel="noreferrer"><LinkedinOutlined style={{fontSize : '100px'}}/></a>
                    <h1>asepsyafrudin</h1>
                </Col>
                <Col span={4}>
                    <a href="https://www.instagram.com/asseeppsyafrudin/" target="_blank" rel="noreferrer"><InstagramOutlined style={{fontSize : '100px'}} /></a>
                    <h1>@asseeppsyafrudin</h1>
                </Col>
                <Col span={4}>
                    <a href="https://www.youtube.com/channel/UCtYrOzdnmefzSmbKxK73GyQ" target="_blank" rel="noreferrer"><YoutubeOutlined style={{fontSize : '100px'}}/></a>
                    <h1>Iconix23Channel</h1>
                </Col>
                <Col span={4}>
                    <a href="https://www.facebook.com/aasseep" target="_blank" rel="noreferrer"><FacebookOutlined style={{fontSize : '100px'}}/></a>
                    <h1>@asseepp</h1>
                </Col>
            </Row>
        </div>
        </>
        )
       
    }

  return (
      <>
      {pages}
      </>
  );
}

export default RoutePages;