import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { ShoppingBasketRounded } from '@material-ui/icons'
import { connect } from 'react-redux'

class CheckoutCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <IconButton color="inherit">
        <Badge badgeContent={this.props.checkoutCounter} color="secondary">
          <ShoppingBasketRounded />
        </Badge>
      </IconButton>
    )
  }
}

const mapStateToProps = state => {
  return {
    checkoutCounter: state.checkout.length
  }
}

export default connect(mapStateToProps, null)(CheckoutCounter)
