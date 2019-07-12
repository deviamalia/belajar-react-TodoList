import React, { Component } from 'react'
import TodoItem from '../components/TodoItem'
import PropTypes from 'prop-types'


class TodoInput extends Component {
  
  render() {
    // console.log(this.props.todos)
    return this.props.todos.map((todo) => (
    <TodoItem key = {todo.id} todo={todo} markComplete = {this.props.markComplete}  delTodo = {this.props.delTodo}/>
   
    )) 
  }
 }
 
//PropTypes = fungsi untuk melempar data 
TodoInput.propTypes = { //membuat class baru PropTypes
  todos : PropTypes.array.isRequired, //di ambil dari dari state todos  
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.func.isRequired,
}

export default TodoInput;
 