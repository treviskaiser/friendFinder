var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/data", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/data", function(req, res) {
    var scoreDifference;
    var friendScore = 0;
    var userScore = 0;
    var newUser = req.body.scores;

    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 45
    };

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      scoreDifference = 0;
      console.log(friends[i]);
      for (var j = 0; j < newUser.length; j++) {
        friendScore = currentFriend.scores[j];

        userScore = newUser[j];

        scoreDifference += Math.abs(
          parseInt(userScore) - parseInt(friendScore)
        );
        console.log(scoreDifference);
      }
      console.log(scoreDifference);
      if (scoreDifference <= bestMatch.friendDiff) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDiff = scoreDifference;
      }
    }
    console.log(bestMatch);
    res.json(bestMatch);
    friends.push(req.body);
  });
};
