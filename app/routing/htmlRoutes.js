

var express = require("express");

var router = express.Router();
var path = require("path");

console.log("html routes")

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
 });
// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

router.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/home.html"));
 });

module.exports = router;