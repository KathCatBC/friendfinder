
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var friend = require('../data/friends.js')


console.log("api routes loaded");

router.get("/friends", function(req,res){
	res.json(friends);
});


router.post("/friends", function(req, res) {
	
	var addedFriend = req.body
	var newScores = addedFriend.scores

	var bestMatch = friends[0];
	var bestScore = 100;  // set the bar higher than the best possible score, since lowest score is best match.

	for (i=0; i<=friends.length-1; i++) {
		match = friends[i];
		currentScore = 0;
		for (j=0; j<=9; j++){
			currentScore = parseInt(currentScore) + Math.abs(parseInt(newScores[j]) - parseInt(match.scores[j]));
			// I don't know why I needed parseInt, but it was the only way to make it work.
		}

		if (currentScore < bestScore) {
			bestScore = currentScore;
			bestMatch = friends[i];
		}
	}

	friends.push(req.body);
	res.json(bestMatch);
});

module.exports = router