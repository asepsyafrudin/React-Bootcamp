import React, { Component } from 'react';
import aset1 from "../image/denso.png";
import styleHeader from './style.module.css';
class HeaderDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
           <div className={styleHeader.header}>
               <img src={aset1} alt="Image" />
           </div>
            
         );
    }
}
 
export default HeaderDisplay;