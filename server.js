
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// app.use(express.static(process.cwd() + "/public"));

// figure out if extended should == true or false

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




// Routes
// =============================================================

// +app.get("/", function(req, res) {
//  +  res.sendFile(path.join(__dirname, "app/public/home.html"));
//  +});

// Import routes and give the server access to them.


var apiController = require("./app/routing/apiRoutes.js");
var htmlController = require("./app/routing/htmlRoutes.js");


app.use("/api", apiController);
app.use("/html", htmlController);
app.use("/", htmlController);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
