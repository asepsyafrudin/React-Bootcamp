import React, { Component } from 'react';
import InputForm from '../../component/InputForm'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import styleForm from './style.module.css'

class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "",
            name:"",
            price:0
         }
    }

    onChangeName = (event)=> {
        this.setState({
            id : uuid(),
            name : event.target.value
        })}

    onChangePrice = (event)=> {
        this.setState({
            price : event.target.value
        })}

    submit = (event) => {
        event.preventDefault()
        this.props.submitData(this.state)
    }
    
    render() { 
        return ( 
            <div className={styleForm.form}>
                <form onSubmit = {this.submit}>
                    <InputForm placeholder ="Enter Product Name" type ="text" onChange={this.onChangeName} />
                    <InputForm placeholder ="Enter Product Price" type = "number"onChange={this.onChangePrice}/>
                    <button className={styleForm.btnSubmit}>Submit</button>
                </form>
            </div>

         );
    }
}
 
FormSubmit.propTypes= {
    submitData : PropTypes.func
}

export default FormSubmit;