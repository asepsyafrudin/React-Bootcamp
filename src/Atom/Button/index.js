import React, { Component } from 'react';
import styleButton from './style.module.css';

function Button({onClick, disabled, children}) {
    return(
        <button onClick={onClick} disabled={disabled} className={`${styleButton.button} ${styleButton.button3}`}>{children}</button>
    )
}

export default Button;