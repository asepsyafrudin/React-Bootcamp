import React from 'react';
import { Progress , Tooltip} from 'antd';


function Skill({skillName , progress}) {
    return (
        <>
        <div>{skillName}</div>
        <Tooltip title = {`${skillName} ${progress}%`}>
             <Progress percent={progress} strokeWidth ={15} />
        </Tooltip>
        </>
    )
}

export default Skill