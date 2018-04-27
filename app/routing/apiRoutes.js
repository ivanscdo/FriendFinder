var express = require("express");
var router  = express.Router();
var friends = require("../data/friends.js");


router.get("/api/friends", (req, res) => {
    res.json(friends);
});

router.post("/api/friends", (req, res) => {
    // var newFriend = req.body
    console.log("inside apiRoutes router.post");
    friends.push(req.body);
    // console.log(req.body);
    // res.send("Questions Answered! Finding Friends")
})
    
module.exports = router;