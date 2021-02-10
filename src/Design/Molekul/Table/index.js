import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveIcon from '@material-ui/icons/Remove'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux'

const TAX_RATE = 0.07

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  table: {
    minWidth: 700
  }
}))

function ccyFormat(num) {
  return `${num.toFixed(2)}`
}

// function priceRow(qty, unit) {
//   return qty * unit
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit)
//   return { desc, qty, unit, price }
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
// }

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99)
// ]

// const invoiceSubtotal = subtotal(rows)
// const invoiceTaxes = TAX_RATE * invoiceSubtotal
// const invoiceTotal = invoiceTaxes + invoiceSubtotal

function SpinnerTable({ data }) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(value => (
            <TableRow key={value.id}>
              <TableCell>{value.productName}</TableCell>
              <TableCell align="right">{value.counter}</TableCell>
              <TableCell align="right">{value.productPrice}</TableCell>
              <TableCell align="right">
                {value.productPrice * value.counter}
              </TableCell>
              <TableCell align="center">
                <Grid
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <IconButton color="secondary" aria-label="add an alarm">
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <RemoveIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </TableCell>
            </TableRow>
          ))}

          {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = state => {
  return {
    data: state.checkout
  }
}

export default connect(mapStateToProps, null)(SpinnerTable)
