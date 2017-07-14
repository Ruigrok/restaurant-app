// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var nodemon = require("nodemon");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (json)
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


// Routes
// =============================================================

// Routes to different pages
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Routes to API links to JSON data
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});



// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newreservation = req.body;

  reservations.push(newReservation);

  //res.json(newReservation);
});

app.post("/api/tables", function(req, res) {
  var newreservation = req.body;
  reservations.push(newReservation);
  res.json(newReservation);
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
