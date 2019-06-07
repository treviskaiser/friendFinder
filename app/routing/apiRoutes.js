var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/data", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/data", function(req, res) {
    var scoreDifference;
    var friendScore;
    var userScore;
    var newUser = req.body.scores;

    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: Infinity
    };

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      scoreDifference = 0;
      console.log(currentFriend);
      for (var j = 0; j < newUser.length; j++) {
        friendScore = currentFriend.scores[j];

        userScore = newUser[j];

        scoreDifference += Math.abs(
          parseInt(userScore) - parseInt(friendScore)
        );
        console.log(scoreDifference);
      }

      if (scoreDifference <= bestMatch.friendDiff) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDiff = scoreDifference;
      }
    }
    console.log(bestMatch);
    res.json(bestMatch);
  });
};
