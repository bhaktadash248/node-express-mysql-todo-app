var express = require('express');
var todoLit = require('./controller/module-controller');

var app = express();

//set templete engine

app.set('view engine', 'ejs');

//static file 
app.use(express.static('./public'));

//calling controller function

todoLit(app);

//listem to port

app.listen(3000);

console.log("you a re listening to port number 3000");
