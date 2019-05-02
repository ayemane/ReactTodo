import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({title: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({title: ''})
    }

    btnStyle = {
        flex: '1',
        backgroundColor: '#333',
        color: '#999',
        borderRadius: '0%'
    }
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
            <input 
                type='text' 
                name='title' 
                style={{flex: '10', padding: '5px'}}
                placeholder='Add Todo ...'
                value={this.state.title}
                onChange={this.onChange}/>
            
            <input
                type='submit'
                value='Add'
                className='btn'
                style={this.btnStyle}/>

            </form>
        )
    }
}

export default AddTodo
