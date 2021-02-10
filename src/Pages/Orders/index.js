import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../../Design/Atom/CopyRightFooter'
import Container from '@material-ui/core/Container'
import NavigationBar from '../../Design/Organism/NavigationBar'
import Grid from '@material-ui/core/Grid'
import Table from '../../Design/Molekul/Table'

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

function Orders() {
  const classes = useStyles()
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
            justify="center"
            alignItems="center"
          >
            <Table />
          </Grid>
          <Copyright />
        </Container>
      </main>
    </div>
  )
}

export default Orders
