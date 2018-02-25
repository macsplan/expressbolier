import React, { Component } from 'react';

import ListTodos from './components/ListTodos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todo: '',
    todos : ['walk the dog', 'get coffee'],
  }

  handlechange = (e) => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})

  }

  addTodo = () => {
    const { todo, todos } = this.state;
    const nextTodos = [...todos, todo]
    this.setState({todos: nextTodos, todo: ""})
  }

  removeTodo = (i) => {
    const nextTodos = Array.from(this.state.todos);
    nextTodos.splice(i, 1);
    this.setState({todos: nextTodos})
  }


  render() {
    return (
      <div>
        <h1>Todo App</h1>

        <AddTodo handlechange={this.handlechange}
        todo={this.state.todo} addTodo={this.addTodo}/>
        <ListTodos
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          />
      </div>
    );
  }
}

export default App;
