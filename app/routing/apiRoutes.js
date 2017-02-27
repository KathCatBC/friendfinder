
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var friend = require('../data/friends.js')


console.log("api routes loaded");

router.get("/friends", function(req,res){
	res.json(friends);
});


router.post("/friends", function(req, res) {


	
	console.log(req.body);
	
	var addedFriend = req.body
	var newScores = addedFriend.scores

	console.log("added Friend scores = " + addedFriend.scores)


var bestMatch = friends[0];
var bestScore = 100;  // set the bar higher than the best possible score
for (i=0; i<=friends.length-1; i++) {
	console.log("i = " + i);
	match = friends[i];
	currentScore = 0;
	for (j=0; j<=9; j++){
		console.log("J = "+ newScores[j] + "  " + match.scores[j]);
		console.log("J subtract & abs = "+ Math.abs(parseInt(newScores[j]) - parseInt(match.scores[j]))); 
		currentScore = Number(currentScore) + Math.abs(Number(newScores[j]) - Number(match[j]));
		console.log(currentScore);
	}
	console.log("currentScore = "+ currentScore)
	if (currentScore < bestScore) {
		bestScore = currentScore;
		bestMatch = friends[i];
		console.log(bestMatch.name)
	}
}

// pop up mod with match
console.log("best match = " + bestMatch.name)
	res.json(bestMatch);

  friends.push(req.body);
});

module.exports = router