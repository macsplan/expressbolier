const express = require("express");
const mongoose = require("mongoose")
const PORT = 8080;
const Todo = require('../models/todo')

const uri = 'mongodb://localhost:27017/todoApp'
mongoose.connect(uri)

const app = express();

const todos = [];

app.get("/todos", (req, res) => {
  // get all todos
  Todo.find({})
    .then(docs => {
      //send back a list of all todos
      res.status(200).send({ message: "Success", payload: docs });
    })
    .catch(err => {
      // if can't find todos for some reason, send error
      res.status(500).send({ message: err.message });
    });
});

app.post("/todos/:todo", (req, res) => {
  // instantiate new todo model
  const todo = new Todo({
    description: req.params.todo
  });
  // save new todo model
  todo
    .save()
    .then(doc => {
      // send back successful todo saved into db
      res.status(201).json({ message: "Success", payload: doc });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

app.patch("/todos/:id/complete", (req, res) => {
  const id = req.params.id

  Todo.findByIdAndUpdate(id, {completed: true})
  .then(doc => {
    res.status(200).send({
      message: "updated",
      payload: doc
    })
  }).catch(err => {
    sres.status(500).json({ message: err.message });
  })

});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id
    Todo
      .findByIdAndRemove(id)
      .then(doc => {
        // send back successful todo saved into db
        res.status(201).json({
          message: "Success", payload: doc});
      })
      .catch(err => {
        res.status(500).json({
          message: err.message,

        });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
