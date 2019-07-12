import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class AddTodo  extends Component {

    state = {
        title : '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title : '',
        })
        console.log("tes", this.state.title)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name ]: [e.target.value]  
        });
        // console.log("ini judul", this.state.title)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display : 'flex' }}>
                <input
                type = "text"
                name = "title"
                style = {{flex : '10', padding : '5px'}}
                placeholder="Add To Do"
                value={this.state.title}
                onChange = {this.onChange}
                />
                <input
                type = "submit" 
                value = "submit"
                className = "btn"
                style = {{flex : '1'}}
                />
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo : PropTypes.func.isRequired,
    // markComplete : PropTypes.func.isRequired,
    // delTodo : PropTypes.func.isRequired,
  }

  