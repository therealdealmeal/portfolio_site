var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '.')));


app.listen(8000);
console.log('Server running on port:  ' + 8000);
