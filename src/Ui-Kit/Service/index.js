import React from 'react';

function Service({title , desc}) {
    return (
        <>
        <div style={{
            fontSize : '18px',
            fontWeight : 'bold',
            marginTop : '15px'}}>
            <span>{title}</span>
        </div>
        <p>
            {desc}
        </p>
        </>
        
    )
    
}

export default Service;