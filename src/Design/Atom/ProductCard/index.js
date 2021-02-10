import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import { addCounter, minCounter } from '../../../Redux/actions/storeAction'

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: this.props.productId,
      productName: this.props.productName,
      unit: 'PCS',
      counter: 0,
      productPrice: this.props.productPrice,
      totalPrice: 0
    }
  }

  addFunction = () => {
    if (this.state.counter < this.props.stock) {
      this.setState(
        {
          counter: this.state.counter + 1
        },
        () => {
          this.setState(
            {
              totalPrice: this.props.productPrice * this.state.counter
            },
            () => {
              this.props.add(this.state)
            }
          )
        }
      )
    }
  }

  reduceFunction = () => {
    if (this.state.counter > 0) {
      this.setState(
        {
          counter: this.state.counter - 1,
          totalPrice: this.state.productPrice * this.state.counter
        },
        () => {
          this.props.reduce(this.state)
        }
      )
    }
  }

  render() {
    const {
      productId,
      productName,
      productPrice,
      discount,
      stock,
      counter,
      imageUrl
    } = this.props

    const classes = {
      root: {
        maxWidth: 345
      }
    }

    const StyledBadge = withStyles(() => ({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid`,
        padding: '0 4px'
      }
    }))(Badge)

    return (
      <Grid item xs={6} sm={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <IconButton aria-label="cart">
                <StyledBadge
                  badgeContent={this.state.counter}
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Typography gutterBottom variant="h5" component="h2">
                {productName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Product Price : Rp{productPrice}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Stock : {stock}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddShoppingCartIcon />}
              onClick={this.addFunction}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={this.reduceFunction}
            >
              Subtract
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    productList: state.productList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: payload => dispatch(addCounter(payload)),
    reduce: payload => dispatch(minCounter(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
