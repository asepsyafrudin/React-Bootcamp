import './App.css'
import ProductList from './Pages/ProductList'
import Order from './Pages/Orders'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/orders">
            <Order />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
