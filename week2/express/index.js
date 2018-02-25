const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: 'hello'
  });
});

app.get("/goodbye", (req, res) => {
  res.status(200).json({
    success: true,
    message: 'goodbye'
  })
})

app.get("/greeting/:name", (req, res) => {
  res.status(200).json({
    success: true,
    message: 'goodbye'
  })
})

app.get("/reverse/:name", (req, res) => {
  let name = req.params.name;
  const reversed = name.split('').reverse().join('')
  res.status(200).json({
    success: true,
    message: reversed
  })
})

app.get('/*', function(req, res, next) {
  res.send("This will match anything!");
});

app.get("/greeting/:name", (req, res) => {
  res.status(200).send("hello")
})

app.listen(8081)

console.log("server running on port 8081!")
