var express = require("express");
var router  = express.Router();
var friends = require("../data/friends.js");


router.get("/api/friends", (req, res) => {
    res.json(friends);
});

router.post("/api/friends", (req, res) => {
    // console.log("inside apiRoutes router.post");
    friends.push(req.body);
    
    var allFriends = friends;
    var newFriend = req.body;
    var otherFriends_Length = allFriends.length-1;
    var otherFriend_Score = 0;
    var newFriend_Score = 0;
    var scoreDifference = 0;
    var totalDifference = 0;
    var totalDifference_Arr = [];
    var leastDifference = 0;

    // friends.push(newFriend);
    // console.log(newFriend);

    // TEST: entire array of objects
    // console.log(allFriends)

    for (let x = 0; x < otherFriends_Length; x++ ) {
        var totalDifference = 0;
        
        // console.log("---allFriends---");

        // TEST: display name of friend
        console.log(allFriends[x].name)
        
        for(let y = 0; y < 10; y++) {
        
        // TEST: logs all scores, alternates between newFriend & allFriends, broken up by index
        // console.log(`---allFriends${y}---`);
        // console.log(allFriends[x].scores[y]);
        // console.log(`---newFriend${y}---`);                      
        // console.log(newFriend.scores[y]);

        // otherFriend_Score = parseInt(allFriends[x].scores[y]);
        otherFriend_Score = allFriends[x].scores[y];        
        newFriend_Score = parseInt(newFriend.scores[y]);

        // TEST: logs difference between newFriend & allFriends scores
        // console.log(`---difference---`);
        // console.log(Math.abs(otherFriend_Score-newFriend_Score));
        // console.log(scoreDifference);     


        // scoreDifference = Math.abs(parseInt(otherFriend_Score-newFriend_Score));
        // totalDifference += parseInt(scoreDifference);
        scoreDifference = Math.abs(otherFriend_Score-newFriend_Score);
        totalDifference += scoreDifference;


        // console.log(totalDifference);
        // console.log(`${otherFriend_Score} -  ${newFriend_Score} =    ${scoreDifference}     || ${totalDifference}`);

        // END OF: for(let y = 0; y < 10; y++) {
        }
        // console.log("---");                
        // totalDifference_Arr.push(parseInt(totalDifference));
        totalDifference_Arr.push(totalDifference);
        
        // console.log(totalDifference_Arr);

        // console.log(Math.min(parseInt(totalDifference_Arr)));
        // leastDifference = parseInt(Math.min(totalDifference_Arr));
        leastDifference = Math.min(...totalDifference_Arr);        
        // console.log(leastDifference);



        // TEST: log index of smallest number (most compatible friend) in totalDiff_Arr
        // console.log(totalDifference_Arr.indexOf(Math.min(totalDifference_Arr)));
        // console.log("index of the least difference: ", totalDifference_Arr.indexOf(leastDifference));

        // TESTLOG: totaldif_arr, leastdiff, indexOf leastdiff
        // console.log(totalDifference_Arr, leastDifference, totalDifference_Arr.indexOf(leastDifference));

        mostCompatibleFriend_index = totalDifference_Arr.indexOf(leastDifference);

        // console.log(mostCompatibleFriend_index);
        
        
        // console.log("---");
        // console.log("---newFriend---");                
        // for(let y = 0; y < 10; y++) {
        //     // console.log(allFriends[x].scores[y]);
        //     console.log(newFriend.scores[y]);
        // }  

        // console.log("allFriends[i].scores:", allFriends[i].scores);
        // console.log("newFriend.scores: ", newFriend.scores);
        
        // console.log("---totalDifference_Arr & leastDifference---");
        // console.log(`${totalDifference_Arr} || ${leastDifference}`);



        // TEST: typeof
        // console.log("otherFriend_Score(parseInt): ", otherFriend_Score, typeof otherFriend_Score);
        // console.log("otherFriend_Score: ",allFriends[x].scores[y], typeof allFriends[x].scores[y]);
        // console.log("newFriend_Score(parseInt): ", newFriend_Score, typeof newFriend_Score);
        // console.log("newFriend_Score: ", newFriend.scores[y], typeof newFriend.scores[y]);

        // console.log("scoreDifference: ", scoreDifference, typeof scoreDifference);
        // console.log("totalDifference: ", totalDifference, typeof totalDifference);

        // console.log("totalDifference_Arr: ",  totalDifference_Arr, typeof totalDifference_Arr);
        // console.log("leastDifference: ", leastDifference, typeof leastDifference);
        // console.log("totalDifference_Arr[x]: ", totalDifference_Arr[x], typeof totalDifference_Arr[x]);       
        // console.log("-");

    // END OF: for (let x = 0; x < otherFriends_Length; x++ ) {
    }

    res.send("Questions Answered! Finding Friends")
})
    
module.exports = router;