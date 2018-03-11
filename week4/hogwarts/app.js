const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/hogwarts'

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Successfully connected to: ${uri}`)
  })
  .catch(err => console.log(err.message))
