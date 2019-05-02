import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () =>{
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: '#e4e4e4', 
            padding: '5px 20px',
            borderBottom: '1px dotted #ccc',
        }
    }
    btnStyle = {
        backgroundColor: '#ccc',
        color: '#333',
        border: '1px solid #grey',
        cursor: 'pointer',
        float: 'right',
        borderRadius: '50%',
        fontSize: '0.7em'
    }
  render() {
      const {id,title,completed} = this.props.todo
    return (
      <div style={this.getStyle()} key={id}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} defaultChecked={completed}/>
            {title}
            <button style={this.btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
        
      </div>
    )
  }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
