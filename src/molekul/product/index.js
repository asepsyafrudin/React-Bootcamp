import React, { Component } from 'react';
import Card from '../card';
import './style.css';
import PropTypes from 'prop-types';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

    render() { 
        return ( 
            <div className="product">
                {this.props.submitData.map(value => {
                    return (
                        <Card title={value.name} key={value.id} price={value.price}/>
                    )
                })}
            </div>
         );
    }
}
 
Product.propTypes = {
    submitData : PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string,
            id : PropTypes.number
        })
    )
}
export default Product;