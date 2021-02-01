import React from 'react';
import { Image, Space } from 'antd';
import hackerRankSertificate from '../../File/HackerRank.JPG';
import javaSertificate from '../../File/Java.JPG'
import javascriptSertificate from '../../File/Javascript.JPG';
import reactSertificate from '../../File/React.JPG';
import Title from '../../Ui-Kit/Title';

function SertificatePages () {
    return (
        <>
       <Title title ='My Certificate'/>
       <div style ={{marginTop : '50px'}}>
            <Image.PreviewGroup>
                <Space>
                    <Image
                        width={200}
                        src={hackerRankSertificate}
                        />
                    <Image
                        width={200}
                        src={javaSertificate}
                        />
                    <Image
                        width={200}
                        src={javascriptSertificate}
                        />
                    <Image
                        width={200}
                        src={reactSertificate}
                        />
                </Space>
             </Image.PreviewGroup>
        </div>
         
        </>
    )
}

export default SertificatePages;