const express = require('express');
const app = express()


//Controller
app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
  app.listen(8000)