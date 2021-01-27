import React, { Component } from 'react';
import ButtonStyle from './style.module.css'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter : 1
         }
    }

    onClickFunction = () => {
        if(this.props.children === "+") {
            this.props.addFunction(this.state.counter)
            console.log("plus function")
        } else {
            this.props.minFunction(this.state.counter)
            console.log("min function")
        } 
    }

    render() { 
        return ( 
            <button className={ButtonStyle.button} onClick={this.onClickFunction}>{this.props.children}</button>
         );
    }
}

Button.propTypes = {
    addFunction : PropTypes.func,
    minFunction : PropTypes.func
}
 
export default Button;