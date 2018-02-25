const express = require("express")
const app = express()

const todos = ['walk the dog']

app.get('/todos', (req, res) => {
  res.status(200).json({
    success: true,
    todo: todos
  })
})

app.post('/todos/:todo', (req, res) => {
  const todo = req.params.todo;
  todos.push(todo)
  res.status(200).json({
    success: true,
    todo: todos
  })
})

app.delete('/todos/:index', (req, res) => {
  const index = req.params.index;
  const removed = todos.splice(index, 1);

  if (removed.length === 0) {
    res.status(404).json({

    })
  }
  todos.splice(req.)
  todos.push(push)
  res.status(200).json({
    success: true,
    todo: todos
  })
})


app.post('/todos/:todo')

app.listen(8081)
