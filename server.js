var express = require('express');

var app = express();
var env = process.env.NODE_ENV;

app.use(express.static('flux/examples/flux-todomvc'));

module.exports = app;

app.listen(8000, function() {
	console.log("Listen on port 8000...");
});
