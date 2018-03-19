
var express = require('express');
var app = express();
var relativePath;
var absolutePath = (__dirname + '/views/index.html');
var middlewarePath = (__dirname + '/public');
// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */
//app.get('/', (req, res) => res.send("Hello"));

/** 3) Serve an HTML file */
app.get('/', (req, res) => res.sendFile(absolutePath));

/** 4) Serve static assets  */

app.use(express.static(middlewarePath));

/** 5) serve JSON on a specific route */
app.get('/', (req, res) => res.json({message: 'Hello json'}));

/** 6) Use the .env file to configure the app */
app.get('/', (req, res) => res.json({message: 'Hello json'})); 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

var siteIp = function(req, res, next) {
  var responseText = 'Hello World!';
  console.log(req.path + req.ip);
  //res.send(responseText);
  next();
  
}
app.use(siteIp);
//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
