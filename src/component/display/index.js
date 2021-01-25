import React, { Component } from 'react';
import './style.css'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           
        }
    }
    render() { 
        const {counterChange} = this.props
        return ( 
            <div className="display">
                <span>Product Counter : {counterChange} </span>
            </div>
         );
    }
}
 
export default Display;