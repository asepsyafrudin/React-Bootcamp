import React, { Component } from 'react';
import styleInputSearch from './style.module.css';
import PropTypes from 'prop-types'

class InputTextSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    render() { 
        return ( 
            <div className =  {styleInputSearch.inputSearch}>
                <input type="text" placeholder={this.props.placeholder} onKeyUp={this.props.onChangeValue} className={styleInputSearch.input}></input>
            </div>
         );
    }
}
 
InputTextSearch.propTypes = {
    placeholder : PropTypes.string,
    onChangeValue : PropTypes.func
}

export default InputTextSearch;