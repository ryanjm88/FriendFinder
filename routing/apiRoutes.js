
var path = require("path");
var friendsArray = require("../app/data/friends.js");

function routing(app)   {
    app.get("/api/friends", function(req, res)  {
        res.json(friendsArray);
        // this is where I would pull data from the friends array
    });

    app.post("/api/friends", function(req, res) {
      // this is where I would post user data to the friends array
});
}