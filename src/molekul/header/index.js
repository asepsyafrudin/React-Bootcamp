import React, { Component } from 'react';
import Menu from '../../component/menu'
import HeaderDisplay from '../../component/headerDisplay'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <>
                <div className="nav">
                    <Menu menu1 = 'Home' menu2 = 'Register Tool' menu3 = 'Zero Stock' menu4='Purchase Order'/>
                </div>
                <HeaderDisplay/>
            </>
            
         );
    }
}
 
export default Header;