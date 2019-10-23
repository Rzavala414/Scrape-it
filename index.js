const express = require('express')
const app = express()
 
var PORT = process.argv || 3000;
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT,function(){
    console.log("APP listening on http://localhost:" + PORT)
})