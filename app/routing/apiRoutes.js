var friends = require("../data/friends");


module.exports = function(app) {

  //get the data from friends list

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

  //post the new user info into the friends list
    app.post("/api/friends", function(req, res) {
    

  //creating a variable for new user
    var user = req.body;

  //looping the user scores and  converting into intergers
    for (var i = 0; i < user.scores.length; i++){
      user.scores[i] = parseInt(user.scores[i]);
    }

    //friend index
    var bestFriend = 0;

    var leastDifference = 40;

    for (var i = 0; i < friends.length; i++){
      var totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++){
        var differnce = Math.abs(user.scores[j] - friends[i].scores[j]);

        totalDifference += differnce;

      }

      if (totalDifference < leastDifference){
        bestFriend = i;
        leastDifference = totalDifference;
      }
    }

    friends.push(user);

    res.json(friends[bestFriend]);
  });
  



    };
