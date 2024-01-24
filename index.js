var express = require('express');

var PORT = 8080;

var app = express();
app.get('/api', function (req, res){
  res.send('Hello world, Node.js app running on Docker');
});

app.listen(PORT);
console.log('Node.js web server at port 8080 is running..')
