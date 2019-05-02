import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './Todos';
import Header from './Header'
import AddTodo from './AddTodo'
import About from './pages/About'
import uuid from 'uuid'
import axios from 'axios';

class App extends Component{
    state = {
        todos: []
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res =>{
                console.log(res.data)
                this.setState({todos: res.data})
            })
    }
    render(){
        //console.log(this.state.todos)
        return(
            <Router>
                <div className='App'>
                    <div className='container'>
                        <Header/>
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete} clearCompleted={this.clearCompleted} delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>

                        <Route path='/about' component={About}/>
                        
                    </div>
                </div>
            </Router>
        )
    }
    
    markComplete = (id) =>{
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id == id){
                todo.completed = !todo.completed
            }
            return todo
        })})   
    }

    delTodo = (id) => {
        console.log(id)
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    addTodo = (todo) => {
        // todo.id = uuid.v4()
        // todo.completed = false

        axios.post('https://jsonplaceholder.typicode.com/todos',{title: todo.title, competed: false})
            .then(res => {
                this.setState({
                    todos: [res.data,...this.state.todos]
                })
            })
        
    }
}
export default App;