import React, { Component } from 'react';

const Todo = (props) => {
  const { todo, removeTodo, i } = props

  return (
    <div>
      <li key={i}>
        {todo}
        <button onClick={() => removeTodo(i)} >Remove Todo</button>
      </li>
    </div>
  )
}

export default Todo
