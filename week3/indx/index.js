const express = require('express');
const PORT = 8080;

const todos = [];

const app = express();

app.get('/todos', (req, res) => {
  res.status(200).json({todos: todos})
});

app.post('/todos/:todo', (req, res) => {
  const todo = req.params.todo;
  todos.push(todo);
  res.status(201).json({todo: 'todo'})
});

app.delete('/todos/:index', (req, res) => {
  const index = req.params.index;
  const deletedtodo = todos.splice(index, 1)
  res.status(202).json({todo: deletedtodo})
});
//
app.put('/todos/:index/:newTodo', (req, res) => {
  const { index, newtTodo} = req.params;
  todos[index] = newTodo
  res.status(200).json({todo: newTodo})
});

app.listen(8080, () => {
    console.log(`Listening on port ${8080}.`);
});
