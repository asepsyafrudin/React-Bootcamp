import React, { Component } from 'react';
import Button from '../../component/button'
import Display from '../../component/display'
import CardStyle from './style.module.css'
import aset1 from '../../component/image/aset1.jpg'
import PropTypes from 'prop-types'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value : 0
         }
    }

    add = (newValue) => {
        this.setState({
            value : this.state.value + newValue
        })
    }

    min = (newValue) => {
        if(this.state.value > 0) {
            this.setState({
                value: this.state.value - newValue
            })
        }
    }

    render() { 
        return ( 
            <>
                <div className={CardStyle.card}>
                    <Display counterChange ={this.state.value}/>
                    <div className={CardStyle.imageWithPrice}>
                        <img src={aset1} alt="aset1" className={CardStyle.img}/>
                        <span className={CardStyle.price}>{this.props.price}</span>
                    </div>
                    <div className={CardStyle.title}>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className={CardStyle.container}>
                        <Button addFunction = {value => this.add(value)}>+</Button>
                        <Button minFunction ={value => this.min(value)}>-</Button>
                    </div>
                </div>
            </>
         );
    }
}
 
Card.propTypes = {
    price : PropTypes.number,
    title : PropTypes.string
}

export default Card;