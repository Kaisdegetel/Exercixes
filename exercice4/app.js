var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser")



const hostname = '127.0.0.1';
const port = 3000;
var indexRouter = require('./routes/index');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

server.listen(port, hostname, () => {
  console.log("Server is running...");
});

module.exports = app;
