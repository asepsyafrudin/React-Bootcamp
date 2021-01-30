import React, { Component } from 'react';
import Judul from './Atom/Judul';
import styleApp from './App.module.css';
import Button from './Atom/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : [],
      currentPage : 1,
      totalDataPerPage : 0,
      maxPage : 0,
      isLoading : true,
      startPage : 0
     }
  }

  fetchApi = ()=> {
    const page = this.state.currentPage
    const url = `//swapi.dev/api/people/?page=${page}`

    fetch(url)
    .then(response => response.json())
    .then(response => this.setState({
      data : response.results,
    }))
  }

  prev = () => {
    this.setState({
      currentPage : this.state.currentPage - 1,
      startPage : this.state.startPage - this.state.totalDataPerPage
    }, () => {
      this.fetchApi();
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.data === this.state.data) {
      return false
    } else {
      return true
    }
  }

  next = () => {
    this.setState({
      currentPage : this.state.currentPage + 1,
      startPage : this.state.startPage + this.state.totalDataPerPage
    }, () => {
      this.fetchApi();
    })
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(response => this.setState({
      data : response.results,
      maxPage : Math.ceil(response.count/response.results.length),
      totalDataPerPage : response.results.length,
      isLoading : false, 
      startPage : 1
    }));
  }

  render() { 
    const {data, currentPage, maxPage, isLoading, startPage} = this.state
    let content ; 
    if(isLoading) {
      content = (
        <div className={styleApp.loader}></div>
     )
    } else {
      content = ( 
      <div>     
        <Judul/>
        <div className={styleApp.table}>
          <table id={styleApp.customers}>
            <thead>
              <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Height</th>
                  <th>Mass</th>
                  <th>Skin Color</th>
                </tr>
            </thead>
            <tbody>
                  {data.map((value,index) => {
                    return (
                      <tr key={index}>
                        <td>{startPage+index}</td>
                        <td>{value.name}</td>
                        <td>{value.height}</td>
                        <td>{value.mass}</td>
                        <td>{value.skin_color}</td>
                    </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>
        <div className={styleApp.pagination}>
          <Button onClick={this.prev} disabled={currentPage === 1}>Previous</Button>
          <span>Page : {currentPage} </span>
          <Button onClick={this.next} disabled={currentPage === maxPage}>Next</Button>
        </div>
      </div>
      )
    } 
    return ( 
      <div>
          {content}
      </div>
      
     );
  }
}
 
export default App;
