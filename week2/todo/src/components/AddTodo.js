import React, { Component } from 'react';

const AddTodo = (props) => {
  const { todos, removeTodo } = props

  return (
    <div>
      <input type="text"
      placeholder="Add your input"
      name="todo"
      onChange={props.handlechange}
      todo={props.todo}/>

      <button onClick={props.addTodo}>Add Todo</button>

  </div>
  )
}

export default AddTodo
