import React, { Component } from 'react';
import './style.css'
import { BiBarChartAlt} from 'react-icons/bi'
import InputTextSearch from "../inputTextSearch";
import PropTypes from 'prop-types'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="totalMenu">
                <div className="menu">
                    <div className="logo"><BiBarChartAlt />Tools Inventory</div> 
                    <div name="list">{this.props.menu1}</div>
                    <div name="list">{this.props.menu2}</div>
                    <div name="list">{this.props.menu3}</div>
                    <div name="list">{this.props.menu4}</div>
                </div>
                <InputTextSearch placeholder ="Search"/>
            </div>            
            
         );
    }
}

Menu.propTypes = {
    menu1 : PropTypes.string,
    menu2 : PropTypes.string,
    menu3 : PropTypes.string,
    menu4 : PropTypes.string
}
 
export default Menu;