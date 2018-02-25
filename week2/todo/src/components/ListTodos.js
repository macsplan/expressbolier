import React, { Component } from 'react';

import Todo from './Todo'

const ListTodos = (props) => {
  const { todos, removeTodo } = props

  return (
    <div>
      <ul>
      {todos.map((todo, i) => {
        return (
          <Todo
            removeTodo={removeTodo}
            todo={todo} 
            i={i}
            />
          )
        })
      }
      </ul>
    </div>
  )
}

export default ListTodos
