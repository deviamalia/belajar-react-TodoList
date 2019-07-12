import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import TodoInput from './components/TodoInput';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
    state = {
      todos : []
    }

    componentDidMount = () => {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos :  res.data}))
    }
    
    //Toggle Complete    
    markComplete = (id) => {
      this.setState ({ 
        todos : this.state.todos.map(todo => {
        if(todo.id === id){
          todo.complete = !todo.complete; 
        }
        return todo; 
        })
      })
    }

    //Delete TO Do 
    delTodo = (id) => {
      // console.log(id)
      axios.delete(`https://jsonplaceholder.typicode.com/todos/$`)
      .then(this.setState({
        todos : [...this.state.todos.filter(todo => todo.id !== id)]
      }))
    } 

    //Add To Do 
    addTodo = (title) => {
      // const newTodo = {
      //   id : uuid.v4(),
      //   title, 
      //   complete : false,
      // }
      axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        title,
        complete : false,
      })
      .then(res => this.setState({
        todos : [...this.state.todos, res.data]
      }))
      
      


    }

  render (){
     return ( 
      <Router>
        <div className='App'>
          <div className='Container'>
          <Header/>
          <Route exact path="/" render={props => (
             <React.Fragment>
               <AddTodo addTodo={this.addTodo}/>
               <TodoInput todos={this.state.todos} 
                markComplete = {this.markComplete} 
                delTodo = {this.delTodo}/>
             </React.Fragment>
          )}/>
          <Route path="/about" component={About}/> 
          </div>
        </div>
      </Router>
     
    );
  }

}
 

export default App;
