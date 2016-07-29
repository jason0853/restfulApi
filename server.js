// Load external module
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Configure express and mysql
var app = express();
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'api'
});

// Connect to MySQL.
conn.connect();

// Configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Load route
require('./routes/index')(app, conn);
