
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var friend = [{
 
 
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         res.json(characters[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(characters);
//   }
// });

// Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newreserve = req.body;

//   console.log(newreserve);

//   reservation.push(newreserve);

//   res.json(reservation);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});







// Start pseudo code

// look at star wars code
// handlebars??

// Load & Require npm packages
// 	express (loaded)
// 	path	(loaded)
// 	body-parser  (loaded)

// Create landing (home page)
// 	Title
// 	link to survey page

// Create Survey page
// 	Just start with empty questions 
// 	have drop down or radio buttons 1-5
// 	name text box
// 	photo box
// 	Load data into datafile
// 	Do Routes
// 		post
// 			survey results
// 		get
// 			survey
// 			results

// 		use
// 			homepage


// 	do calcs
// 	find match
// 	ask about the math 
// 		since (a1-b1)+(a2-b2)+(a3-b3)+(a4-b4)...  = (a1+a2+a3+a4)-(b1+b2+b3+b4)
// 		can't I just add the number then look for the closest match





