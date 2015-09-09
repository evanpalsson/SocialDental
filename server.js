var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 8005);
app.listen(port)
console.log("server working on port 8005")