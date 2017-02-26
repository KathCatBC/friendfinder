
var express = require("express");

var router = express.Router();

var friend = require('../data/friends.js')


console.log("api routes loaded")

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
	// res.send(req.body)
	console.log(req.body);
	
	var addedFriend = req.body
	var newScores = addedFriend.scores

	console.log("added Friend scores = " + addedFriend.scores)

	

var bestMatch = friends[0];
var bestScore = 100;
for (i=0; i<=friends.length-1; i++) {
	console.log("i = " + i);
	match = friends[i];
	currentScore = 0;
	for (j=0; j<=9; j++){
		console.log("J = "+ parseInt(newScores[j]) + "  " + parseInt(match.scores[j])) 
		console.log("J subtract & abs = "+ Math.abs(parseInt(newScores[j]) - parseInt(match.scores[j]))); 
		currentScore = ParseInt(currentScore) + Math.abs(parseInt(newScores[j]) - parseInt(match[j]));
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

  friends.push(req.body);
});

module.exports = router