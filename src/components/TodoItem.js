import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {

    getStyle = () => {
        // if(this.props.todo.complete){
        //     return{
        //         textDecoration : 'Line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration : 'none'
        //     }
        // }
        return{
            background : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted', 
            textDecoration : this.props.todo.complete ? 'Line-through' : 'none' //apakah todo.complete kalo iya maka Linethrough atau bukan maka none
        }
    }
  
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
               <p>
                <input type="checkbox" onChange = {this.props.markComplete.bind(this, id)}/>  {'  '}  
               {title}
               <button style={buttonStyle} onClick = {this.props.delTodo.bind(this, id)}>X</button>
               </p>
            </div>
        ) 
    }
}
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,//mengambil todo
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired,
  }

  const buttonStyle = {
      background : '#ff0000',
      color : '#fff',
      border : 'none',
      padding : '5px 10px',
      borderRadius : '50%',
      cursor : 'pointer',
      float : 'right' 
  }


  export default TodoItem;

  //LATIHAN 4-JULI = sampai pada proses untuk Styling, dan menggunakan fungsi getITemStyle