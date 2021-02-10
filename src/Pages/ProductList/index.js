import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../../Design/Atom/CopyRightFooter'
import Container from '@material-ui/core/Container'
import NavigationBar from '../../Design/Organism/NavigationBar'
import ProductCard from '../../Design/Atom/ProductCard'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function ProductList({ dataProductList }) {
  const classes = useStyles()
  const { productList } = dataProductList
  return (
    <div className={classes.root}>
      <NavigationBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {productList.map(value => {
              return (
                <ProductCard
                  key={value.id}
                  productId={value.id}
                  productName={value.productName}
                  productPrice={value.productPrice}
                  stock={value.stock}
                  discount={value.discount}
                  counter={value.counter}
                  imageUrl={value.imageUrl}
                />
              )
            })}
          </Grid>

          <Copyright />
        </Container>
      </main>
    </div>
  )
}

const mapStateToProps = state => {
  return { dataProductList: state }
}

export default connect(mapStateToProps, null)(ProductList)
