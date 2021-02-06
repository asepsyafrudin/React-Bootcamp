import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addtodo, deleteTodo, updateTodo } from './redux/action/crudAction';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id : 0,
      name : "",
      search : false,
      searchValue :"",
      updateBoolean :false
     }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { add , updateById, data } = this.props

    if(this.state.updateBoolean === true) {
      console.log(this.state.id)
        let newData = data;
        for (let index = 0; index < newData.length; index++) {  
        if(newData[index].id === this.state.id) {
          newData[index].name = this.state.name
        }
        this.setState({
          updateBoolean : false,
          name : ""
        })
      }
      updateById(newData);
    } else {
        add({
          id : new Date().getMilliseconds(),
          name : this.state.name
        })
        this.setState({
          id : 0,
          name :""
        })
    }
  }

  deleteData = (event) => {
    const id = parseInt(event.target.parentElement.parentElement.id)
    let newData = this.filterData(id)
    const {deleteById} = this.props
    deleteById(newData)
  }

  filterData = (id) => {
    const {data} = this.props
    return (data.filter(value => value.id!==id))}

  onSearch = (event) => {
    if(event.target.value !== "") {
      this.setState({
        search : true,
        searchValue : event.target.value
      })
    } else {
      this.setState({
        search : false
      })
    }
  }

  updateData = (event) => {
    const {data} = this.props
    const id = parseInt(event.target.parentElement.parentElement.id)
    let nameValue = data.find(value => value.id ===id)
    this.setState({
      id : nameValue.id,
      name : nameValue.name,
      updateBoolean : true
    })
  }

  render() { 
    const {data} = this.props
    let filterData = this.state.searchValue ? data.filter(value => value.name.includes(this.state.searchValue)) : data
    return ( 
      <div style={{marginLeft:"20px"}}>
        <input type="text" placeholder="Search Data" onChange = {this.onSearch}/>
        <form onSubmit = {this.onSubmit}>
          <input type="text" placeholder="Enter Your Name" onChange = {this.onChange} name="name" value={this.state.name}/>
          <input type ="submit" value ="submit"/>
        </form>
         <table id ="customers">
           <thead>
             <tr>
                <th>No</th>
                <th>Name</th> 
                <th colSpan="2" style={{textAlign:"center"}}>Action</th>
             </tr>
           </thead>
           <tbody>
            {filterData.map((value, index) => {
              return (
                <tr key={value.id} id={value.id}>
                  <td>{index+1}</td>
                  <td >{value.name}</td>
                  <td style={{textAlign:"center"}}><button onClick={this.updateData}>Update</button></td>
                  <td style={{textAlign:"center"}}><button onClick={this.deleteData}>Delete</button></td>
                </tr>  
              ) 
            })}
           </tbody>
         </table>
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {data : state.data}
}

const mapDispatchToProps = (dispatch) => {
  return {
    add : payload => dispatch(addtodo(payload)),
    deleteById : payload => dispatch(deleteTodo(payload)),
    updateById : payload => dispatch(updateTodo(payload))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);