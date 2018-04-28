const express = require("express"),
      router  = express.Router();

var friends = require("../data/friends.js");

router.get("/api/friends", (req, res) => {
    res.json(friends);
});

router.post("/api/friends", (req, res) => {
    friends.push(req.body);
    
    var allFriends              =   friends,
        newFriend               =   req.body,
        otherFriends_Length     =   allFriends.length-1,
        otherFriends_Score      =   0,
        newFriend_Score         =   0,
        scoreDifference         =   0,
        totalDifference         =   0,
        totalDifference_Arr     =   [],
        leastDifference         =   0,
        mostCompatible_indexOf  =   0;


    function mostCompatible () {

        for (let x = 0; x < otherFriends_Length; x++ ) {
            var totalDifference = 0;
            
            for(let y = 0; y < 10; y++) {
            
                otherFriends_Score = allFriends[x].scores[y];        
                newFriend_Score = parseInt(newFriend.scores[y]);

                scoreDifference = Math.abs(otherFriends_Score-newFriend_Score);
                totalDifference += scoreDifference;

            // END OF: for(let y = 0; y < 10; y++) {
            }

            totalDifference_Arr.push(totalDifference);
            leastDifference = Math.min(...totalDifference_Arr);        
            mostCompatible  = totalDifference_Arr.indexOf(leastDifference);
            


        // END OF: for (let x = 0; x < otherFriends_Length; x++ ) {
        }
        return mostCompatible;

    // END OF: function mostCompatible () {
    }

    mostCompatible_indexOf = mostCompatible();
    console.log(allFriends[mostCompatible_indexOf]);
    res.json(allFriends[mostCompatible_indexOf]);
    
// END OF: router.post("/api/friends", (req, res) => {
})
    
module.exports = router;