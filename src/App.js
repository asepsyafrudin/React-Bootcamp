import React, { Component } from 'react';
import Product from './molekul/product';
import './App.css'
import Header from './molekul/header'
import FormSubmit from './molekul/formSubmit'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data : [{
          id : 1,
          name : "G0133",
          price : 10000
      }, {
          id : 2,
          name : "G9449",
          price : 25000
      }, {
          id : 3,
          name : "G9449",
          price : 24500
      }, {
          id : 4,
          name : "G1720",
          price : 17500
      }]
     }
  }

  submitData = (newValue) => {
    this.setState({
      data : [...this.state.data, newValue]
    })
  }
  render() { 
    return ( 
      <>
       <Header/>
        <div className="App"> 
            <FormSubmit submitData={(value) => this.submitData(value)}/>
            <Product submitData={this.state.data}/>
        </div>
      </>
     );
  }
}
 
export default App;
