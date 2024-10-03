// Express.js Framework

// Intro to Express.js
// express js ek npm package hai
// framework
// manages everything from receiving the requests and giving the response


// Setting up a basic Express apllication.
// Routing
// Middleware
// Request and response handling
// Error Handling
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Champion mera bhai omi');
});

app.get("/profile", function(req, res) {
    res.send("Champion uska coach");
});

app.listen(3000);



// Syntax
// app.get(route, requestHandler = is function(req, res, next <= optional))