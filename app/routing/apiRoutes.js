
var express = require("express");

var router = express.Router();

// var friends = require('../data/friends')


console.log("apirouter")

router.get("/friends", function(req,res){
	console.log("api/friends get")
	res.json(friends)
})

// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// router.post("/api/friends", function(req, res) {
router.post("/friends", function(req, res) {

console.log("api/friends post")

	console.log(req);
	console.log(res);

	console.log("api/friends post")

	console.log("put logic here not in friends.js")

  // friends.push(req.body);

  // res.json(friends);
});

module.exports = router