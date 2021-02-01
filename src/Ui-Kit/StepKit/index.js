import React from 'react';
import { Popover } from 'antd';



const StepKit = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
    </Popover>
);

export default StepKit;

