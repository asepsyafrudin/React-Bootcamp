import React from 'react';
import styleButton from './style.module.css';

function Button({onClick, disabled, children}) {
    return(
        <button onClick={onClick} disabled={disabled} className={`${styleButton.btn} ${styleButton.first}`}>{children}</button>
    )
}

export default Button;