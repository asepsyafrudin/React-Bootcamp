import React from 'react'
import { Image } from 'antd';


function ImagePreview({width , src}) {
  return (
      <Image
        width={width}
        src={src}
      />
    
  );
}

export default ImagePreview;