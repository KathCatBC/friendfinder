friends =[{}];

var addedFriend = req.body
var newScores = addedFriend.scores

var bestMatch = "friends[0]"
var bestScore = 1
for (i=0; friends.length-1, i++) {
	match = friends[i];
	currentScore = 0
	for (j=0, 9, j++)
		currentScore += abs(newScores[j] - match[j])
	}
	if (currentScore > bestScore) {
		bestScore = currentScore;
		bestMatch = friends[i];
	}
} 




module.exports = friends;