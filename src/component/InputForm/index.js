import React, { Component } from 'react';
import styleInput from './style.module.css'
import PropTypes from 'prop-types'

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <input type = {this.props.type} placeholder={this.props.placeholder} className={styleInput.input} onChange={this.props.onChange} required/>
         );
    }
}
 
InputForm.propTypes = {
    type : PropTypes.string,
    placeholder : PropTypes.string,
    onChange : PropTypes.func
}

export default InputForm;